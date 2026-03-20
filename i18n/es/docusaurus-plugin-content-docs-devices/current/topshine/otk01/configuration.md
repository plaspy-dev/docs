---
slug: /topshine/otk01/configuration
id: otk01-configuration
sidebar_label: Configuration
title: TopShine - OTK01 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopShine OTK01 con ajustes de servidor Plaspy y comandos SMS para reporte por GPRS
keywords:
  - configuración TopShine OTK01
  - configuración OTK01
  - integración OTK01 Plaspy
  - configuración servidor OTK01
  - configuración rastreador GPS TopShine
  - comandos SMS OTK01
  - ajustes servidor Plaspy
  - configuración seguimiento vehicular
  - configuración rastreador OBD II
  - configuración seguimiento de flotas
---

# TopShine - OTK01 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador OBD II TopShine OTK01 con la plataforma Plaspy. Reúne los ajustes de servidor prácticos y los comandos SMS provistos por el fabricante que se usan habitualmente para preparar el dispositivo para el reporte por GPRS a Plaspy. Use esta guía junto con el manual del dispositivo y los recursos oficiales de TopShine para detalles específicos del equipo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos y herramientas de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las utilidades del vendedor, por lo que aplique los comandos y ajustes siguientes confirmando el flujo exacto con la documentación de TopShine y la información en la etiqueta del dispositivo.

## Resumen de la configuración

Esta configuración prepara una unidad OTK01 para reportar la ubicación y la telemetría del vehículo a la plataforma Plaspy mediante GPRS, con SMS como alternativa de respaldo. El objetivo es configurar el endpoint del servidor, asegurar que el APN de datos móviles sea correcto y verificar que el dispositivo aparezca en Plaspy.

- Configurar el OTK01 para que use Plaspy como su endpoint de reporte GPRS para que la posición y la telemetría lleguen a la plataforma.
- Verificar el APN y el modo GPRS para que las subidas de datos móviles funcionen y que el SMS siga disponible para respuestas a comandos.
- Establecer el identificador del dispositivo (relacionado con el IMEI) para que Plaspy pueda mapear el rastreador al registro correcto.
- Validar la conectividad con Plaspy y confirmar que las actualizaciones llegan a la plataforma para monitoreo en vivo de ubicación y eventos.
- Opcionalmente, restablecer a configuración de fábrica al preparar un dispositivo para una nueva implementación o para solucionar problemas.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects
- All devices in Plaspy use the same port so use 8888 for device server configuration

## Requisitos típicos antes de la configuración

- Un OTK01 con alimentación instalado en el puerto OBD II del vehículo o alimentado según las indicaciones del fabricante.
- Una tarjeta SIM activa con voz/SMS y datos o capacidad solo SMS según lo requiera su despliegue; asegúrese de conocer el APN del operador.
- Acceso al IMEI del dispositivo (impreso en el equipo o recuperable vía comando SMS) para establecer correctamente los identificadores del dispositivo.
- Un teléfono capaz de enviar comandos SMS al rastreador para la configuración o acceso al software del fabricante si está disponible.
- Acceso a Plaspy con la información de provisión del dispositivo para que pueda verificar los reportes tras la configuración.
- El manual de usuario oficial de TopShine o la referencia de comandos para confirmar la sintaxis específica del firmware y la contraseña por defecto.

## Cómo se conecta este rastreador a Plaspy

El OTK01 puede enviar posición y telemetría del vehículo a Plaspy subiendo datos por GPRS al endpoint y puerto compartidos de Plaspy. Plaspy acepta esas conexiones y asocia los datos entrantes con el dispositivo mediante el IMEI o el id de dispositivo configurado.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o al IP 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar transporte UDP o TCP en el puerto 8888 según la configuración del equipo y los requisitos del operador.
- Plaspy detecta automáticamente el protocolo usado por el rastreador, por lo que los dispositivos pueden configurarse con cualquiera de los dos transportes.
- Una vez conectado, el rastreador proporciona actualizaciones de ubicación e informes de eventos para que Plaspy muestre la posición y la telemetría en tiempo real.
- El SMS permanece disponible para consultas basadas en comandos y para reporte de respaldo donde esté configurado.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de TopShine para su unidad OTK01, normalmente mediante comandos SMS o el software del proveedor, y confirme la contraseña del dispositivo y el IMEI.
2. En la configuración del equipo, introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del servidor en 8888. Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP en el dispositivo si requiere selección explícita de transporte.
5. Configure los valores del APN del operador si es necesario para que el dispositivo pueda establecer sesión de datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el equipo requiere un reinicio para activar los ajustes.
7. Valide que el OTK01 reporte a Plaspy comprobando que aparezcan actualizaciones de posición o un informe de prueba en su cuenta de Plaspy o monitoreando las conexiones entrantes en el servidor.

## Comandos de configuración de ejemplo

Los siguientes comandos SMS son los públicos provistos con la guía de configuración del OTK01. Los comandos se muestran en el orden comúnmente usado durante la configuración inicial. La contraseña por defecto del dispositivo en estos ejemplos es 000000 según el fabricante. Mantenga los marcadores como [apn], [apnu] y [apnp] y reemplácelos por su APN, usuario APN y contraseña APN del operador cuando corresponda.

- Reinicio opcional a fábrica inicial (usar solo cuando pretenda restaurar los valores de fábrica):
```text
W000000,990,099###
```

- Establecer el ID del dispositivo. Use los primeros 14 dígitos del IMEI del dispositivo al enviar este comando. Plaspy normalmente identifica el dispositivo por su IMEI completo.
```text
W000000,010,<first_14_digits_of_IMEI>
```

- Configurar el APN del operador. Reemplace [apn] por el APN de su operador. Si su APN requiere usuario o contraseña, incluya [apnu] y [apnp] después del APN.
```text
W000000,011,[apn],[apnu],[apnp]
```

- Establecer el servidor GPRS al endpoint de Plaspy usando la IP pública y el puerto.
```text
W000000,012,54.85.159.138,8888
```

- Cambiar el dispositivo al modo de reporte GPRS (el valor de ejemplo 2 configura el modo GPRS en muchas versiones de firmware de TopShine).
```text
W000000,013,2
```

- Establecer el intervalo de reporte/actualización (el valor de ejemplo 6 se muestra; ajuste según su política de reporte y el firmware del dispositivo).
```text
W000000,014,6
```

- Recuperar el IMEI del dispositivo vía respuesta SMS:
```text
W000000,601
```

Notas sobre los marcadores:
- [apn] es la cadena APN de su operador de red móvil.
- [apnu] es el usuario del APN si el operador lo exige.
- [apnp] es la contraseña del APN si el operador la exige.
- Reemplace \<first_14_digits_of_IMEI> por los dígitos reales del IMEI del dispositivo según se indica.

## Notas de configuración

- La sintaxis de los comandos y los parámetros disponibles pueden variar según la versión de firmware; confirme los formatos exactos de SMS con la documentación de TopShine para su lote de dispositivos.
- La configuración por SMS está soportada por el OTK01 como se muestra, pero la configuración GPRS es necesaria para el reporte continuo a Plaspy.
- Elija UDP o TCP según las condiciones de red y sus preferencias operativas. Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los ajustes de servidor y puerto en estos comandos apuntan a Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888); no cambie el puerto a menos que lo indique el soporte de Plaspy.
- El comando de reinicio de fábrica es opcional y se recomienda solo al reprovisionar o al solucionar problemas de un dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine OTK01 para reportar a Plaspy brinda a los operadores de flotas ubicación en tiempo real y telemetría del vehículo con un esfuerzo mínimo de instalación. El diseño plug-and-play OBD II, junto con el reporte a Plaspy, facilita la incorporación rápida de vehículos, el monitoreo continuo y la reproducción histórica de rutas cuando se restablece la conectividad.

Para saber más sobre Plaspy y cómo gestionar dispositivos OTK01 a escala visite https://www.plaspy.com. Para obtener los comandos específicos más recientes, notas de firmware y detalles de hardware verifique la información en el sitio del fabricante https://www.gztopshine.com/ ya que las revisiones de hardware y el comportamiento del firmware pueden cambiar con el tiempo.
