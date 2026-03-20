---
slug: /cantrack/g200ny/configuration
id: g200ny-configuration
sidebar_label: Configuration
title: CanTrack - G200NY Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CanTrack G200NY y conectarlo a Plaspy con la configuración de servidor compartido
keywords:
  - Configuración CanTrack G200NY
  - Instalación CanTrack G200NY
  - CanTrack G200NY Plaspy
  - Configuración servidor G200NY
  - Configuración rastreador GPS G200NY
  - Configuración rastreador GPS para ganado
  - Integración rastreador Plaspy
  - Guía configuración plataforma GPS
  - Configuración informes rastreador
  - Configuración remota del dispositivo
---

# CanTrack - Configuración del G200NY

Esta página abarca el contexto público de configuración para usar el rastreador CanTrack G200NY con la plataforma Plaspy. Explica los ajustes compartidos del servidor que Plaspy requiere y ofrece un flujo de trabajo práctico para que prepare el G200NY y garantice informes confiables hacia Plaspy. Use este documento junto con las guías del fabricante para completar los pasos en el dispositivo y confirmar comportamientos específicos del modelo.

Plaspy utiliza un único endpoint y puerto compartido para todos los rastreadores compatibles y detecta automáticamente el protocolo correcto. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que confirme cualquier comando o menú específico del dispositivo con la documentación de CanTrack mientras sigue el flujo general presentado aquí.

## Resumen de configuración

Preparar un G200NY para Plaspy se centra en direccionar el dispositivo al endpoint compartido de Plaspy, confirmar la conectividad celular y validar que las posiciones y eventos lleguen a la plataforma. Las siguientes tareas son los objetivos prácticos durante la configuración.

- Apuntar el endpoint de reporte del dispositivo a Plaspy usando los ajustes de servidor compartido.
- Confirmar que el dispositivo tenga conectividad celular activa y que la APN o ajustes de SIM sean correctos para la telemetría saliente.
- Elegir el modo de transporte si el dispositivo solicita UDP o TCP y configurar el mismo puerto que usa Plaspy.
- Aplicar y guardar la configuración en el dispositivo y reiniciarlo si el flujo del fabricante lo requiere.
- Validar que el G200NY reporte correctamente al servidor de Plaspy y aparezca en su cuenta de Plaspy.
- Tener en cuenta las políticas de firmware y actualizaciones OTA para garantizar un comportamiento consistente a lo largo del tiempo.

## Ajustes del servidor Plaspy

Configure el dispositivo para que reporte a Plaspy usando los siguientes ajustes públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Batería del dispositivo totalmente cargada o una fuente de alimentación estable para la configuración inicial y las pruebas.
- Una tarjeta SIM activa con acceso a datos adecuada para el operador y la región, y los ajustes de APN disponibles si son necesarios.
- Acceso al método oficial de configuración de CanTrack para el G200NY, como comandos SMS, herramienta web o aplicación del fabricante según lo provea CanTrack.
- Conocimiento de la versión de firmware y los detalles del modelo para seguir el procedimiento correcto del fabricante.
- Una cuenta en Plaspy y familiaridad básica para monitorear un nuevo dispositivo en la consola de Plaspy y validar los reportes.
- Un plan de pruebas corto para confirmar la fijación GPS y la alcanzabilidad de la telemetría una vez que el dispositivo esté apuntando a Plaspy.

## Cómo se conecta este rastreador a Plaspy

El G200NY utiliza su enlace celular para enviar informes periódicos de posición y eventos al endpoint del servidor de Plaspy. Una vez configurado para usar el servidor y puerto de Plaspy, el dispositivo transmite datos GNSS y localización asistida para su ingestión y visualización en Plaspy.

- El rastreador reporta ubicación y telemetría al endpoint compartido de Plaspy d.plaspy.com en el puerto 8888.
- Puede seleccionar UDP o TCP en el dispositivo si requiere elegir el transporte; Plaspy acepta ambos en el mismo puerto.
- Plaspy determina automáticamente el protocolo del dispositivo para poder parsear los mensajes entrantes del G200NY sin cambiarlos por dispositivo.
- Eventos reportados como movimiento, alertas SOS y disparos de geocerca se reenvían a Plaspy para notificaciones y registro histórico.
- Una configuración exitosa hace que el dispositivo sea visible en la consola de Plaspy, donde podrá monitorear la posición en tiempo real y la salud del dispositivo.

## Flujo de trabajo de configuración común

1. Acceda al método o software oficial de configuración de CanTrack para el G200NY según la documentación del fabricante.
2. Introduzca el endpoint de Plaspy configurando el dispositivo para usar d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP y configúrelo para usar el puerto 8888.
5. Aplique o guarde la configuración en la herramienta del dispositivo o mediante comando SMS según lo indique CanTrack.
6. Reinicie el dispositivo si el flujo del fabricante especifica un reinicio para que los nuevos ajustes de red entren en vigor.
7. Valide que el G200NY reporte a Plaspy comprobando la aparición del dispositivo y la telemetría en su cuenta de Plaspy y confirmando actualizaciones recientes de ubicación.

## Ejemplos de comandos de configuración

No se incluyeron comandos públicos específicos del dispositivo en el contenido de este modelo. La sintaxis exacta de los comandos y el método para enviar los ajustes varían según el firmware de CanTrack y la herramienta del proveedor utilizada. Los métodos comunes del fabricante incluyen comandos SMS, una herramienta de PC o web, o una configuración OTA enviada por CanTrack o un integrador autorizado. Consulte la documentación de CanTrack para el conjunto de comandos exacto para:

- establecer dominio o IP del servidor
- configurar el puerto de reporte
- seleccionar UDP o TCP si es necesario
- configurar APN o detalles de la SIM

Si necesita ejemplos de comandos, remítase a las guías oficiales de CanTrack o contacte al soporte de CanTrack para obtener los comandos SMS o de herramienta canónicos para el G200NY.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de comandos, las etiquetas de los menús o el comportamiento requerido para reiniciar; confirme siempre los comandos para el firmware de su dispositivo.
- Si debe elegir entre UDP y TCP, pruebe ambos transportes cuando estén disponibles. Plaspy acepta los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Asegúrese de que la APN y los ajustes de la SIM sean correctos para su operador celular para que el G200NY pueda establecer conexiones salientes.
- Use un intervalo de reporte corto para la validación inicial y luego aumente los intervalos para conservar la batería en despliegues de ganado a largo plazo.
- Tenga en cuenta las políticas de actualización OTA; algunos cambios de configuración pueden ser sobrescritos por envíos de firmware si los dispositivos son gestionados centralmente por el proveedor.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G200NY con Plaspy ofrece a operadores ganaderos e investigadores una vía práctica para obtener visibilidad continua de ubicaciones, notificaciones de eventos y gestión remota. El G200NY está diseñado para larga autonomía en entornos exigentes, y configurarlo para reportar a Plaspy centraliza la telemetría para monitoreo, alertas y análisis histórico sin la complejidad de servidores por dispositivo.

Learn more about Plaspy and how it supports device telemetry and fleet visibility at https://www.plaspy.com. For device specific commands, firmware information, and the latest setup instructions for the G200NY, verify details with CanTrack at https://www.cantrackgps.com/ since manufacturer configuration methods and firmware behavior can change over time.
