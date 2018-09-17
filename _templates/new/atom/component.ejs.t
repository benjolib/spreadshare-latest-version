---
to: "client/components/atoms/<%= h.inflection.camelize(name) %>.vue"
---
<%
if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div />
</template>
<%
}


if (blocks.indexOf('script') !== -1) {
%><script>
// @flow

export default {}
</script>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module>
@import '@design';
</style><%
}
%>
