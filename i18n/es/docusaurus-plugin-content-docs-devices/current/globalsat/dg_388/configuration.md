---
slug: /globalsat/dg_388/configuration
id: dg_388-configuration
sidebar_label: Configuration
title: GlobalSat - DG-388 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para GlobalSat DG-388 con ajustes de servidor Plaspy, ejemplos de comandos SMS y orientación práctica
keywords:
  - Configuración GlobalSat DG-388
  - Instalación GlobalSat DG-388
  - Configuración DG-388 Plaspy
  - Configuración software de seguimiento DG-388
  - Configuración plataforma GPS DG-388
  - Configuración dispositivo Plaspy
  - Configuración registrador de datos GPS
  - Importación de rutas históricas Plaspy
  - Exportación herramienta PC GlobalSat
  - Importación telemetría DG-388
---

# GlobalSat - Configuración del DG-388

Esta página explica el contexto público de configuración para usar el GlobalSat DG-388 con Plaspy. Se concentra en los ajustes prácticos del servidor, el flujo de trabajo habitual para preparar el dispositivo o la herramienta de exportación para su ingestión en Plaspy, y ejemplos públicos de comandos que aparecen en algunas herramientas y procedimientos de GlobalSat. Utilice esta guía para entender cómo apuntar dispositivos compatibles o herramientas exportadoras hacia Plaspy para importar rutas y procesar telemetría.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, las herramientas de instalación o los procesos del proveedor. El DG-388 es principalmente un registrador de datos GNSS independiente que normalmente se utiliza con la herramienta de descarga para PC suministrada para exportar pistas; no obstante, cuando existen comandos de configuración públicos se muestran aquí por completitud y para variantes o herramientas que permiten configuración remota.

## Visión general de la configuración

El objetivo de la configuración es preparar el DG-388 o su herramienta de exportación para entregar la telemetría registrada a Plaspy para análisis, archivo e informes. Esto incluye establecer el endpoint del servidor en cualquier dispositivo o software que soporte subida o reporte a un servidor remoto, validar la conexión y confirmar la visibilidad en la plataforma Plaspy.

- Configure el dispositivo o la herramienta de exportación para que apunte al endpoint compartido de Plaspy para que las sesiones exportadas estén listas para importarse.
- Proporcione los ajustes de transporte necesarios y guarde la configuración para que el dispositivo o la herramienta sepan a dónde enviar los datos.
- Valide la conectividad y confirme que el dispositivo o los archivos de pista exportados aparecen en Plaspy tras la carga o ingestión.
- Cuando proceda, use las plantillas públicas de SMS o comandos que se muestran más abajo para establecer el servidor y el puerto en firmware o herramientas de proveedor compatibles.
- Utilice la herramienta para PC del DG-388 para exportar las pistas registradas e importarlas en Plaspy para reconstrucción histórica de rutas y análisis de telemetría.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP (the tracker may be configured using UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when devices connect

Estos valores se comparten entre todos los dispositivos soportados por Plaspy; la plataforma usa el mismo puerto para todos los equipos compatibles y gestiona la detección de protocolo de forma automática.

## Requisitos típicos antes de la configuración

- Asegúrese de que el DG-388 esté cargado y pueda ejecutar la herramienta de descarga para PC del proveedor para exportar pistas.
- Tenga acceso a la herramienta oficial de GlobalSat para PC o al método de configuración del fabricante para su unidad.
- Conozca el IMEI del dispositivo o el identificador si lo requiere alguna plantilla de comando o la herramienta del proveedor.
- Si planea usar SMS o comandos remotos (cuando la variante del dispositivo o el módulo conectado lo permitan), confirme que el dispositivo admite SMS y que dispone de una SIM activa y capacidad de enviar SMS.
- Confirme que los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) se ingresen exactamente como se indica.
- Prepare un método para verificar la conectividad, por ejemplo subiendo una pequeña pista de prueba o comprobando la actividad del dispositivo en Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy o cuando se ingresan las pistas exportadas, los datos del DG-388 pasan a ser visibles en la plataforma Plaspy para historial, análisis e informes. Los puntos siguientes resumen cómo se integra el dispositivo o sus datos exportados con los flujos de trabajo de Plaspy.

- El dispositivo o la herramienta de exportación relacionada se configura para reportar o subir al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP si el dispositivo o la variante exige seleccionar un transporte al apuntar a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta, por lo que los mismos ajustes de puerto y servidor funcionan para los dispositivos compatibles.
- Una vez recibidos los datos, Plaspy procesa los puntos de ubicación y los pone a disposición para la línea de tiempo, la importación de rutas y el análisis de telemetría.
- La validación consiste en confirmar que el dispositivo o la herramienta de exportación entrega con éxito archivos o conexiones que aparecen en el panel de Plaspy.

## Flujo típico de configuración

1. Acceda a la herramienta oficial de GlobalSat para PC, a la interfaz SMS o al método de configuración del fabricante para su DG-388 o la variante concreta del producto.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo server/host de la interfaz de configuración.
3. Configure el puerto en 8888 (Plaspy usa el mismo puerto para los dispositivos soportados).
4. Elija UDP o TCP si su dispositivo o herramienta requiere seleccionar el transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe el comando de configuración por el método soportado.
6. Reinicie o vuelva a arrancar el dispositivo si el método de configuración lo exige para que los cambios surtan efecto.
7. Valide que el dispositivo o la sesión exportada informe a Plaspy comprobando la llegada de datos o importando una pista exportada en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Las siguientes plantillas de comando públicas aparecen en materiales del fabricante y del proveedor para configurar valores de servidor y puerto vía SMS en unidades o variantes compatibles. Preserve los marcadores cuando prepare los comandos. Estos ejemplos se muestran en el orden en que aparecen en la fuente pública. Si su variante del DG-388 no admite configuración por SMS, use el flujo de exportación/importación por PC en su lugar.

- Setup command template (set server, port, APN placeholders if applicable)
```text
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Reboot command template (optional, use if a reboot is required)
```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

Notas sobre marcadores y checksum:
- {{imei}} — reemplace con el IMEI del dispositivo o el identificador que use su herramienta del proveedor o el formato de comando.
- [apn], [apnu], [apnp] — marcadores para APN, usuario del APN y contraseña del APN. Inclúyalos sólo si su variante del dispositivo requiere configuración de datos celulares; para el registrador de datos DG-388 estos campos pueden no ser aplicables a menos que esté configurando una variante con capacidad celular o un módem asociado.
- {{checksum}} y {{checksumreeboot}} — el checksum se calcula sobre el texto del comando hasta, pero sin incluir, el carácter '*'. El método público de checksum indicado en las muestras del fabricante es una XOR byte a byte de cada carácter ASCII en la cadena del comando. El checksum resultante se formatea como un valor hexadecimal de dos dígitos en mayúsculas y se añade donde se muestra.
- Estos comandos están dirigidos a flujos de configuración basados en SMS cuando son compatibles. Si su unidad no soporta SMS, aplique los ajustes del servidor mediante la herramienta oficial para PC y el flujo de exportación/importación.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros soportados; consulte la documentación del fabricante para la variante DG-388 que posee.
- Las plantillas de configuración por SMS se incluyen aquí porque aparecen en materiales públicos del proveedor; utilícelas sólo si su dispositivo o módem conectado soporta explícitamente la programación vía SMS.
- Elija UDP o TCP según la capacidad del dispositivo o la herramienta; Plaspy acepta cualquiera en el puerto 8888 y detectará el protocolo automáticamente.
- El DG-388 es principalmente un registrador GNSS independiente que utiliza el software para PC suministrado para exportar pistas; utilice el método de exportación/importación por PC cuando no esté disponible el reporte en vivo o no sea necesario.
- Siempre verifique la configuración después de aplicarla realizando una pequeña carga de prueba o confirmando la aparición de datos en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el DG-388 junto con Plaspy permite a organizaciones y usuarios combinar registros históricos GNSS de alta calidad con el procesamiento y reportes de telemetría de Plaspy. El registro de larga duración y los puntos GNSS precisos del DG-388 proporcionan un historial de rutas fiable que enriquece los mapas, las líneas de tiempo y los análisis de Plaspy para registros de flota, bitácoras de viaje y revisión de incidentes.

Para saber más sobre Plaspy y cómo ingiere telemetría histórica y en vivo, visite https://www.plaspy.com. Para las instrucciones más recientes específicas por dispositivo, información de firmware y detalles del fabricante para los productos GlobalSat, consulte la documentación en https://www.globalsat.com.tw/ ya que los procedimientos y el comportamiento del firmware pueden cambiar con el tiempo.
