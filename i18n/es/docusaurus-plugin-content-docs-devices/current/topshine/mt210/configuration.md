---
slug: /topshine/mt210/configuration
id: mt210-configuration
sidebar_label: Configuration
title: TopShine - MT210 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el TopShine MT210 para seguimiento en tiempo real en Plaspy usando servidor compartido y comandos SMS GPRS
keywords:
  - Configuración TopShine MT210
  - Configuración MT210 para Plaspy
  - Configuración servidor TopShine MT210
  - Configuración rastreador GPS MT210
  - Configuración de rastreador Plaspy
  - Comandos SMS GPRS MT210
  - Configuración rastreador vehicular
  - Configuración GPS doble SIM
  - Configuración telemetría MT210
  - Rastreo de flotas TopShine
---

# TopShine - Configuración del MT210

Esta página documenta el contexto público de configuración para usar el rastreador GPS TopShine MT210 con la plataforma Plaspy. Reúne los ajustes prácticos del servidor y ejemplos de comandos SMS/GPRS que están disponibles públicamente para preparar un MT210 para seguimiento en vivo y reporte de telemetría a Plaspy. Use esta página para entender qué debe configurar en el dispositivo antes de agregarlo a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El MT210 acepta métodos de configuración por SMS y GPRS; los comandos SMS de ejemplo a continuación son muestras públicas que muestran cómo establecer el APN, el identificador del dispositivo y el servidor GPRS para que el MT210 reporte a Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el MT210 para comunicarse de forma fiable con Plaspy, permitiendo que la ubicación en tiempo real, las alarmas y la telemetría aparezcan en la plataforma. Una configuración típica define el APN celular, el identificador del dispositivo, el endpoint y transporte del servidor Plaspy, y luego valida que el rastreador esté reportando.

- Configure el APN del operador celular para que el MT210 pueda usar datos GPRS para reportes.
- Establezca el identificador del equipo o uno derivado del IMEI para que Plaspy asocie los mensajes a una cuenta.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que ubicación y eventos lleguen al sistema.
- Seleccione el transporte UDP o TCP en el dispositivo si el firmware lo requiere.
- Habilite el modo de reporte por GPRS y defina un intervalo de reporte para controlar la frecuencia de actualizaciones.
- Valide la conectividad en la plataforma Plaspy después de guardar y reiniciar el dispositivo.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 — Plaspy usa el mismo puerto para todos los dispositivos soportados  
- Transporte soportado UDP o TCP según las opciones de configuración del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita seleccionar el protocolo manualmente en Plaspy

## Requisitos típicos antes de la configuración

- Acceso al hardware MT210 y a cualquier arnés de instalación o fuente de alimentación necesaria para energizar el dispositivo durante la configuración.
- Al menos una SIM activa con datos habilitados y el APN correcto del operador móvil.
- Tener registrado el IMEI del dispositivo o poder consultarlo mediante el comando de consulta del MT210 para usarlo como identificador.
- Capacidad para enviar comandos SMS desde un teléfono o herramienta de gestión si va a usar la configuración por SMS.
- Acceso a las instrucciones de configuración oficiales de TopShine o a las herramientas del fabricante para opciones específicas de firmware.
- Una cuenta en Plaspy donde se registrará el dispositivo una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El MT210 puede enviar ubicación y telemetría a Plaspy a través de GPRS apuntando el dispositivo al endpoint y puerto compartidos de Plaspy. Plaspy procesa los mensajes entrantes, identifica el dispositivo por su identificador y muestra ubicación en tiempo real, alertas de eventos y datos históricos en la plataforma.

- El rastreador se configura para reportar al endpoint y puerto del servidor Plaspy para que los datos lleguen en tiempo real.
- Los mensajes enviados por GPRS son recibidos por Plaspy, que detecta automáticamente el protocolo del dispositivo y analiza las cargas útiles de ubicación y eventos.
- Si se usa SMS para ciertos eventos o como respaldo, el IMEI o el identificador configurado vincula los mensajes con el registro correcto en Plaspy.
- El reporte incluye actualizaciones de posición, eventos de alarma y telemetría que son visibles en los paneles de Plaspy para monitoreo y alertas.
- Usar el servidor y puerto compartidos asegura un comportamiento consistente entre los distintos modelos de rastreadores soportados por Plaspy.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de TopShine o al software correspondiente, o prepare un teléfono que pueda enviar SMS para los comandos del equipo. Consulte la documentación de TopShine para herramientas específicas de firmware.
2. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que Plaspy utiliza para todos los dispositivos soportados.
4. Seleccione UDP o TCP en el dispositivo si el firmware requiere la selección explícita del transporte.
5. Configure el APN y, si aplica, las credenciales del APN para que la SIM pueda abrir una sesión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del MT210 lo solicita.
7. Verifique que el dispositivo reporte a Plaspy y que la ubicación y la telemetría aparezcan en la plataforma.

## Comandos de configuración de ejemplo

El MT210 puede configurarse mediante comandos SMS. Los siguientes comandos de ejemplo son muestras públicas proporcionadas por el fabricante. La contraseña del dispositivo en estos ejemplos es 000000, que es la contraseña de fábrica. Use un emisor de SMS que pueda enviar mensajes de texto plano a la SIM del rastreador.

- Restablecer a configuración de fábrica (restablecimiento inicial u opcional)
```text
W000000,990,099###
```

- Establecer el id del dispositivo (use los primeros 14 dígitos del IMEI como se muestra en los ejemplos públicos)
```text
W000000,010,<first14IMEIdigits>
```
Explicación: establece el id interno del rastreador usando los primeros 14 dígitos del IMEI. El IMEI del MT210 se utiliza para identificar el dispositivo en los reportes y para su registro en Plaspy.

- Establecer el APN del operador (se muestran marcadores de posición)
```text
W000000,011,[apn]
```
Si el APN requiere usuario y contraseña:
```text
W000000,011,[apn],[apnu],[apnp]
```
Explicación: reemplace [apn] por el APN de su operador móvil. Si el APN requiere autenticación, también suministre [apnu] para el usuario y [apnp] para la contraseña.

- Establecer el servidor GPRS a Plaspy usando la IP pública y el puerto de Plaspy
```text
W000000,012,54.85.159.138,8888
```
Nota: los ejemplos públicos usan la IP y puerto del servidor Plaspy. Algunos firmwares pueden aceptar un nombre de dominio en su lugar; Plaspy también dispone del dominio d.plaspy.com.

- Cambiar el dispositivo al modo de reporte por GPRS
```text
W000000,013,2
```

- Establecer el intervalo de actualización (ejemplo público)
```text
W000000,014,6
```
Explicación: el ejemplo establece el parámetro de intervalo de reporte. Confirme la unidad y los valores aceptables con la documentación de TopShine para su versión de firmware.

- Consultar IMEI del dispositivo
```text
W000000,601
```

Importante: la contraseña por defecto de los comandos SMS en los ejemplos públicos es 000000. Si cambia la contraseña del equipo, sustituya la contraseña correspondiente en los comandos según sea necesario.

## Notas sobre la configuración

- Diferencias de firmware y herramientas: el comportamiento exacto de los comandos, la semántica de los parámetros y las funciones soportadas pueden variar según la versión de firmware del MT210 y el conjunto de herramientas del proveedor. Siempre confirme con la documentación de TopShine para la revisión de su dispositivo.
- SMS frente a configuración por software: el MT210 admite configuración por SMS como se muestra arriba; otras instalaciones pueden preferir USB o software del proveedor. Use el método recomendado para su entorno.
- Selección de transporte: elija UDP o TCP en el dispositivo si es necesario; Plaspy soporta ambos y detectará automáticamente el protocolo entrante.
- Detalles del APN: confirme el APN, el usuario y la contraseña del APN con el operador móvil antes de intentar la configuración GPRS.
- Identidad del dispositivo: el MT210 comúnmente utiliza un identificador derivado del IMEI para la identificación del dispositivo. Asegúrese de que el id que configure coincida con el registro en Plaspy para que los mensajes se asignen correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el TopShine MT210 para reportar a Plaspy ofrece una vía fiable para recibir en tiempo real la ubicación, las alarmas y la telemetría de vehículos y equipos en una única plataforma de monitoreo. La capacidad de doble SIM del MT210, su amplio rango de voltaje y la batería de respaldo complementan la ingestión y el sistema de alertas de Plaspy para apoyar la visibilidad de la flota, flujos de trabajo contra robo y monitoreo operativo en despliegues con vehículos mixtos.

Para obtener más información sobre Plaspy y cómo aparecen sus rastreadores en la plataforma, visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware e instrucciones del fabricante para el TopShine MT210, verifique la información en el sitio oficial de TopShine https://www.gztopshine.com/ ya que las especificaciones y los métodos de configuración del proveedor pueden cambiar con el tiempo.
