---
slug: /topfly/t8806r/protocol
id: t8806r-protocol
sidebar_label: Protocol
title: TopFly - T8806+R Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TopFly T8806+R y su comunicación con Plaspy para seguimiento confiable de vehículos y activos
keywords:
  - protocolo TopFly T8806R
  - TopFly T8806+R
  - protocolo GPS T8806R
  - protocolo TopFly Plaspy
  - protocolo de rastreo T8806R
  - protocolo rastreador GPS TopFly
  - protocolo de rastreador de vehículos
  - seguimiento de flotas TopFly
  - integración sensores BLE TopFly
  - compatibilidad rastreador Plaspy
---

# TopFly - Protocolo T8806+R

Esta página explica el contexto del protocolo público para usar el rastreador TopFly T8806+R con Plaspy. Se enfoca en cómo el dispositivo reporta ubicación y telemetría a Plaspy y en qué aspectos del protocolo del rastreador son relevantes durante la configuración y la resolución de problemas. El objetivo es ofrecer orientación clara y no sensible sobre conectividad y expectativas de protocolo para profesionales de seguimiento de flotas y activos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El TopFly T8806+R ofrece reportes en tiempo real y almacenados en búfer, soporte para sensores BLE, entradas y salidas digitales y una amplia gama de telemetría, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para despliegues en producción, verifique las configuraciones del dispositivo con la documentación oficial del fabricante.

## Visión general del protocolo

El protocolo utilizado por el T8806+R es el mecanismo que permite al rastreador identificarse ante Plaspy y entregar posición, estado y datos de sensores en un formato que la plataforma pueda procesar. A grandes rasgos, el protocolo de reporte del rastreador abarca la configuración de la conexión, la identificación del equipo, reportes periódicos o por eventos y telemetría opcional relacionada con entradas, salidas, BLE y detección de combustible.

- Permite que el T8806+R envíe actualizaciones GNSS a Plaspy, tanto en tiempo real como transmisiones almacenadas en búfer.
- Transporta telemetría como estado de ignición, alertas de entradas, retroalimentación de salidas y valores de sensores BLE.
- Permite que el dispositivo se identifique para que Plaspy asocie los datos entrantes con el registro correcto de vehículo o activo.
- Soporta reportes periódicos y reportes por eventos para alarmas y notificaciones de comportamiento de conducción.
- Funciona con el búfer del dispositivo para que los puntos almacenados se puedan subir tras la recuperación de la red.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente qué protocolo de rastreador está usando un dispositivo cuando la telemetría llega al endpoint de la plataforma. Por lo general, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy usando los ajustes de conexión compartidos.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la dirección IP 54.85.159.138.
- La plataforma escucha en el puerto 8888 y todos los dispositivos compatibles con Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP según las capacidades y la configuración del rastreador.
- Cuando un dispositivo correctamente configurado reporta a Plaspy, la plataforma empata los datos entrantes con un perfil de dispositivo soportado y los procesa automáticamente.
- Si tiene problemas con la detección, verifique los ajustes de reporte del dispositivo y asegúrese de que el rastreador apunte al endpoint y puerto de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el dispositivo alcanza a Plaspy, más que la estructura interna de los mensajes. El T8806+R puede configurarse para usar distintos modos de transporte y reportar su ubicación y estado al endpoint de Plaspy usando el puerto compartido.

- El T8806+R puede configurarse para enviar datos por UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al servidor Plaspy por dominio d.plaspy.com o por la IP 54.85.159.138 según el DNS local y las preferencias de configuración.
- Plaspy utiliza el mismo puerto 8888 para todos los rastreadores soportados, lo que simplifica las configuraciones de servidor en las flotas.
- La selección del transporte puede afectar características de entrega como confiabilidad y latencia, y debe coincidir con las capacidades del firmware del dispositivo y el entorno de red.
- Asegúrese de que las reglas de firewall y de red permitan tráfico saliente hacia el endpoint de Plaspy en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar cómo el rastreador formatea o programa los reportes, por lo que siempre confirme el comportamiento del firmware al solucionar problemas.
- La selección del modo de transporte TCP versus UDP es configurable en el dispositivo y puede influir en si el equipo utiliza confirmaciones o retransmisiones.
- Funciones opcionales del fabricante, como la publicidad de sensores BLE o integraciones RS232, pueden añadir campos de telemetría que deben mapearse en Plaspy.
- La memoria de búfer y el comportamiento de carga difieren según la configuración del equipo y pueden afectar cómo se transfieren los puntos históricos tras la restauración de la conectividad.
- Plaspy detecta automáticamente variantes de protocolo, pero se requieren ajustes de reporte correctos para asegurar una incorporación fluida.
- Valide los ajustes del dispositivo y la disponibilidad de funciones con la documentación oficial de TopFly para detalles específicos de firmware.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación facilita una configuración exitosa, el diagnóstico y la confiabilidad a largo plazo. Saber qué envía el rastreador, cuándo y cómo se conecta a Plaspy reduce errores de configuración y acelera la resolución de incidencias.

- Simplifica la configuración inicial asegurando que el rastreador apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando un transporte soportado.
- Ayuda a interpretar el comportamiento del dispositivo, como cargas en búfer, intervalos en tiempo real y reportes por eventos, durante la resolución de problemas.
- Aclara cómo características opcionales como sensores BLE o entradas RS232 se reflejan en la telemetría de Plaspy para que pueda habilitar alertas y paneles relevantes.
- Mejora la preparación ante cambios de firmware o hardware al centrar las comprobaciones en ajustes de transporte, versión de firmware y políticas de búfer.
- Apoya prácticas de despliegue uniformes en toda la flota al estandarizar el endpoint de conexión y el puerto entre dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el TopFly T8806+R con Plaspy ofrece una forma directa de recoger ubicación y telemetría desde rastreadores vehiculares con alimentación fija y sensores habilitados por BLE. Para los operadores de flota, la combinación de actualizaciones frecuentes de posición, almacenamiento en búfer y amplio soporte de telemetría ayuda a mantener visibilidad y control operativo sobre vehículos y activos.

Plaspy facilita la incorporación de dispositivos al usar un único endpoint de servidor y puerto para todos los dispositivos soportados y al detectar automáticamente el protocolo del rastreador una vez que el dispositivo reporta correctamente. Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para el comportamiento más actual del protocolo específico del dispositivo, notas de firmware y detalles de implementación consulte la documentación oficial del fabricante en https://www.topflytech.com/ ya que el firmware y las funciones del dispositivo pueden cambiar con el tiempo.
