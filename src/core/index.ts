// 渡されたelementがclassかどうか判断する
function isClass (type: any) {
  return (
      Boolean(type.prototype) && Boolean(type.prototype.isReactComponent)
  )
}

/**
 * ツリーを構築する再帰的処理
 */
export function mount (element: any): any {
  var type = element.type
  var props = element.props

  var renderedElement
  if (isClass(type)){
      var publicInstance = new type(props)
      publicInstance.props = props

      if (publicInstance.componentWillMount) {
          publicInstance.componentWillMount()
      }
      renderedElement = publicInstance.render()
  } else {
      renderedElement = type(props)
  }

  return mount(renderedElement)
}