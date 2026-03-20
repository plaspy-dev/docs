---
slug: /globalsat/kt_520/configuration
id: kt_520-configuration
sidebar_label: Configuration
title: GlobalSat - KT-520 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat KT-520 y enviarlo a Plaspy con ejemplos de servidor y comandos
keywords:
  - configuración GlobalSat KT-520
  - instalación KT-520 para Plaspy
  - ajustes de servidor KT-520
  - configuración GPS KT-520
  - configuración de rastreadores Plaspy
  - configuración satelital Kineis
  - comandos SMS KT-520
  - guía BLE KT-520
  - ajustes servidor Plaspy
  - seguimiento por satélite
---

# GlobalSat - Configuración del KT-520

Esta página documenta el contexto público de configuración para usar el GlobalSat KT-520 con Plaspy. Resume los ajustes prácticos de servidor, el flujo de trabajo de puesta en marcha y los comandos SMS públicos que pueden emplearse para apuntar el rastreador a Plaspy. La información se centra en preparar el dispositivo para que informe a Plaspy y en los formatos de comando conocidos según la documentación y ejemplos del fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador en el backend de la plataforma. Los pasos exactos en el dispositivo pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y las herramientas de configuración del proveedor. Esta guía destaca el endpoint de Plaspy y los ejemplos de comandos SMS incluidos en el contenido de configuración del modelo, y le recomienda confirmar los pasos específicos del dispositivo en la documentación de GlobalSat.

## Resumen de configuración

El proceso de configuración del KT-520 prepara el rastreador para enviar sus posiciones GNSS y telemetría a Plaspy mediante el endpoint y puerto estandarizados de Plaspy. Con la configuración correcta, el dispositivo reportará ubicación y datos de diagnóstico que Plaspy puede ingerir, visualizar y usar para alertas.

- Apuntar el KT-520 al endpoint del servidor Plaspy para que los mensajes satelitales lleguen a la plataforma.
- Aplicar los ajustes compartidos del servidor Plaspy (dominio o IP y puerto) para que la plataforma reciba los mensajes del dispositivo.
- Validar la conectividad tras la configuración para que el dispositivo aparezca en Plaspy y reporte ubicación y telemetría.
- Usar el formato de comando SMS provisto o la herramienta de configuración BLE según la guía del fabricante para actualizar parámetros del equipo.
- Reiniciar el dispositivo cuando sea necesario para aplicar los nuevos ajustes de red o servidor.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos previos habituales

- Tener disponible el IMEI del equipo para usar en los comandos de configuración e identificación del dispositivo.
- Contar con energía y batería en buen estado o con el dispositivo conectado a alimentación adecuada para que las operaciones de configuración y reinicio se completen correctamente.
- Acceso al método de configuración del fabricante que requiera el equipo, como SMS o BLE, según el firmware y las opciones de provisión del KT-520.
- Si configura por SMS, poder enviar mensajes SMS al dispositivo desde un teléfono o sistema de gestión que el rastreador acepte.
- Si configura por BLE, proximidad física y una app o herramienta BLE compatible según lo especificado por GlobalSat.
- Confirmación de valores de APN, usuario y contraseña si el dispositivo utiliza una ruta de datos por paquete que los requiera; los marcadores de posición pueden estar presentes y dejarse vacíos si no aplican.

## Cómo se conecta este rastreador a Plaspy

El KT-520 transmite posición GNSS y telemetría a través de la red satelital Kineis hacia servicios backend que reenvían los mensajes a Plaspy. Cuando el dispositivo está configurado con los ajustes de Plaspy, la plataforma ingiere esos mensajes y pone los datos a disposición para mapas, alertas y diagnósticos.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que los mensajes lleguen a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo que utiliza el rastreador y procesa los mensajes entrantes sin necesitar variaciones de puerto por dispositivo.
- Las actualizaciones de ubicación, eventos de movimiento y telemetría de batería enviados por el KT-520 quedan visibles en los paneles y registros de Plaspy.
- El reporte de eventos y el estado operativo permiten monitoreo y generación de alertas dentro de Plaspy para activos remotos.
- Tras la configuración y verificación, el dispositivo aparece en Plaspy y puede utilizarse en geocercas, en historiales y en informes operativos.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de GlobalSat recomendado para su unidad KT-520, como la app de BLE o los comandos SMS documentados por el fabricante.
2. Introduzca el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor de la configuración del dispositivo.
3. Configure el puerto del dispositivo en 8888. Plaspy usa el mismo puerto para todos los equipos, así que verifique que se aplique este puerto.
4. Seleccione UDP o TCP si el dispositivo exige una selección explícita del transporte durante la configuración.
5. Guarde o aplique la configuración en la herramienta del fabricante o mediante el formato de comando SMS para que el dispositivo almacene los nuevos ajustes.
6. Reinicie o haga reboot del rastreador si el equipo lo requiere para aplicar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad y los mensajes entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El contenido de configuración del modelo KT-520 incluye formatos de comando SMS públicos que pueden usarse para establecer la IP del servidor, el puerto y otros parámetros. El formato SMS documentado en el contenido fuente es: TSPRXAB27GHKLMnaicz*U!

Use los siguientes comandos SMS de ejemplo, reemplazando los marcadores según corresponda. Envíe los comandos como mensajes SMS al número asociado al rastreador.

- Comando de configuración
```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```
- Comando de reinicio (opcional o cuando sea necesario aplicar ajustes)
```text
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Notas sobre los marcadores y el checksum:
- [imei] — Reemplazar por el número IMEI del KT-520.
- [apn], [apnu], [apnp] — APN, usuario APN y contraseña APN. Incluya valores solo si su dispositivo o provisión requiere una ruta de datos por paquete. Si no son necesarios para la operación satelital, a menudo pueden dejarse vacíos según la guía del proveedor.
- [checksum] y [checksumreeboot] — Los comandos esperan un checksum hexadecimal añadido después del asterisco. El checksum mostrado en el ejemplo del fabricante se calcula como el XOR de todos los caracteres de la cadena de comando antes del '*' y se representa como un valor hexadecimal en mayúsculas de dos dígitos. Asegúrese de que el checksum sea correcto para todo el prefijo del comando antes de enviarlo.
- El ejemplo usa los campos E0 y E1 para especificar la IP y el puerto de Plaspy. E0=54.85.159.138 y E1=8888 apuntan el rastreador a Plaspy. Alternativamente, algunas herramientas de configuración aceptan d.plaspy.com en un campo de nombre de servidor.

Confirme siempre la sintaxis de los comandos y el algoritmo de checksum con la documentación del equipo o la herramienta de configuración de GlobalSat antes de enviar comandos.

## Notas de configuración

- Las diferencias de firmware o revisiones de hardware pueden cambiar la sintaxis disponible de comandos, los campos obligatorios o el comportamiento del checksum. Verifique con la documentación del equipo.
- El KT-520 admite tanto la configuración por BLE provista por el fabricante como comandos por SMS en el contenido de ejemplo; seleccione el método recomendado para su despliegue y firmware.
- Cuando el equipo requiera selección de transporte, pruebe tanto UDP como TCP si es necesario; Plaspy soporta ambos y gestiona la detección del protocolo en el servidor.
- Asegúrese de establecer E0 y E1 (o los campos equivalentes de servidor y puerto en su herramienta) con los valores de Plaspy indicados más arriba para que los mensajes lleguen a la plataforma.
- Compruebe el estado de la batería o asegure alimentación adecuada antes de realizar configuraciones o reinicios para evitar escrituras interrumpidas.

## Por qué usar Plaspy con esta configuración

Usar el GlobalSat KT-520 con Plaspy amplía la capacidad de rastreo y telemetría en áreas remotas mediante la red satelital Kineis, a la vez que permite a los equipos de operaciones centralizar ubicación, movimiento y estado de batería en una única plataforma. Cuando el dispositivo está apuntado al endpoint y puerto de Plaspy, los reportes satelitales se convierten en datos accionables dentro de Plaspy para monitoreo, alertas y supervisión operativa.

Para saber más sobre Plaspy y cómo gestiona la telemetría de flotas y activos visite https://www.plaspy.com. Para los pasos de configuración específicos más actuales, notas de firmware y guía del fabricante consulte la documentación oficial de GlobalSat en https://www.globalsat.com.tw/ para verificar los detalles y la sintaxis de comando más recientes.
