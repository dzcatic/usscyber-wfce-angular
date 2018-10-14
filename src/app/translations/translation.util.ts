export type Condition = (params: any) => boolean
export type ParameterMapping = (params: any) => any
export type Translation = (params: any) => string
export interface Rule {
  condition: Condition,
  mapping: ParameterMapping,
  translation: Translation,
}
export type RuleBuilder = (condition: Condition, translation: Translation, mapping?: ParameterMapping) => Rule
export type DefaultRule = (translation: Translation) => Rule

export let equals: (val: any, mapping?: ParameterMapping) => Condition = (val: any, mapping?: ParameterMapping) => {
  if (!mapping) {
    mapping = e => e
  }
  return (value) => mapping(value) === val
}
export let staticTranslation: (value: string) => Translation = (value: string): Translation => {
  return (params: any) => value
}

export let rule: RuleBuilder = (condition: Condition, translation: Translation, mapping?: ParameterMapping) => {
  if (!mapping) {
    mapping = e => e
  }
  return {
    condition: condition,
    mapping: mapping,
    translation: translation,
  }
}
export let defaultRule = (translation: Translation, mapping?: ParameterMapping) => {
  if (!mapping) {
    mapping = e => e
  }
  return {
    condition: () => true,
    mapping: mapping,
    translation: translation,
  }
}
export let conditional = (rules: Rule[]) => {
  return (params: any) => {
    for (const _rule of rules) {
      if (_rule.condition(params)) {
        return _rule.translation(params)
      }
    }
    throw new Error('No Translation')
  }
}
