// export component
export default {
  name: 'table-box',
  mounted () {},
  render () {
    const {tableOption = {}} = this
    return (
      <div class={'tableBox'} tableOption={tableOption}>
        11111111111111
      </div>
    )
  }
}
