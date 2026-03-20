---
slug: /itriangle/ts101_basic_ev_can/protocol
id: ts101_basic_ev_can-protocol
sidebar_label: Protocol
title: iTriangle - TS101 Basic EV CAN Protocol
sidebar_class_name: menu_item_tracker
description: Notas del protocolo para integrar el rastreador iTriangle TS101 Basic EV CAN con Plaspy
keywords:
  - protocolo iTriangle TS101 Basic EV CAN
  - protocolo GPS iTriangle TS101
  - compatibilidad TS101 EV CAN Plaspy
  - protocolo de rastreo TS101
  - protocolo rastreador GPS iTriangle
  - protocolo telemetría vehicular
  - rastreo de flotas Plaspy
  - telemetría CAN Plaspy
  - telemetría BLE iTriangle
  - registro offline rastreador
---

# iTriangle - Protocolo TS101 Basic EV CAN

Esta página describe el contexto público del protocolo para usar el rastreador iTriangle TS101 Basic EV CAN con Plaspy. Explica el contexto de comunicación y transporte que permite al dispositivo reportar posición GNSS, telemetría CAN, eventos de entradas y salidas, y registros en búfer a Plaspy sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un TS101 Basic EV CAN está correctamente configurado para apuntar al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en los aspectos públicos y de alto nivel de cómo el rastreador se comunica con Plaspy.

## Visión general del protocolo

El protocolo de reporte del TS101 Basic EV CAN es el mecanismo que transforma la telemetría cruda del dispositivo en datos útiles para la gestión de flotas dentro de Plaspy. Transporta soluciones GNSS, marcadores de eventos, valores del bus CAN y el estado de E/S en un formato que la plataforma Plaspy puede ingerir para seguimiento en tiempo real, historial y alertas.

- Transfiere la ubicación del dispositivo y su telemetría a Plaspy para mapas en vivo y reproducción histórica.
- Identifica la unidad y aporta contexto de sesión para que Plaspy asocie los mensajes entrantes con el registro vehicular correcto.
- Lleva datos orientados a eventos, como activaciones de alarma, cambios en entradas digitales y notificaciones de movimiento por el acelerómetro para reglas y alertas.
- Entrega telemetría y valores diagnósticos provenientes del CAN para que métricas de vehículos eléctricos y datos vehiculares estén disponibles en los paneles de Plaspy.
- Admite registro offline en el dispositivo y carga masiva tras la reconexión para evitar huecos en el historial registrado.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador utilizado por el TS101 Basic EV CAN. En la mayoría de las implementaciones usted no necesita seleccionar manualmente un protocolo dentro de Plaspy una vez que el dispositivo está configurado para reportar al servidor Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y los dispositivos pueden configurarse para reportar allí.
- La IP del servidor Plaspy es 54.85.159.138 y también se admite como destino directo.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la red y la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un TS101 Basic EV CAN configurado correctamente será reconocido y encaminado a la canalización de ingestión correspondiente.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el TS101 Basic EV CAN llega a Plaspy, pero no cambian el propósito general del protocolo. Las instalaciones típicas apuntan el dispositivo al endpoint de Plaspy y seleccionan el transporte que mejor se adapte a las necesidades de cobertura y fiabilidad.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el proveedor de SIM y la configuración del dispositivo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP numérica 54.85.159.138 como destino de reporte.
- Plaspy acepta reportes en el puerto 8888 para todos los dispositivos, por lo que una configuración uniforme simplifica los despliegues.
- La selección del transporte afecta el comportamiento de reintento y la latencia percibida, pero la semántica del protocolo se mantiene enfocada en entregar posición y telemetría.
- Cuando la cobertura celular es débil, el TS101 Basic EV CAN almacenará registros localmente y los subirá automáticamente al endpoint de Plaspy una vez que se recupere la conectividad.

## Notas sobre compatibilidad del protocolo

- El TS101 Basic EV CAN es compatible con Plaspy para telemetría y rastreo cuando está configurado para reportar al endpoint de Plaspy.
- Las versiones de firmware y las revisiones de hardware pueden cambiar qué campos de telemetría están disponibles o cómo se reportan algunos eventos.
- Las opciones de configuración del fabricante, como tipo de transporte, intervalo de reporte y mapeo CAN, influyen en los datos que recibirá en Plaspy.
- Siempre valide los detalles de protocolo y firmware frente a la configuración de los dispositivos usados en su flota para evitar sorpresas durante la integración.
- Use el endpoint y la configuración de puerto compartidos de Plaspy para mantener la configuración del lado del dispositivo consistente en flotas mixtas.
- Si depende de señales CAN específicas o del comportamiento de E/S, confirme esos mapeos con el fabricante y durante pruebas piloto.

## Por qué es importante entender el protocolo

Comprender cómo el TS101 Basic EV CAN se comunica con Plaspy ayuda a garantizar una configuración confiable, telemetría precisa y una resolución de problemas eficiente durante el despliegue y la operación.

- Asegura que el dispositivo apunte correctamente al endpoint de Plaspy y que se seleccione el transporte adecuado para que los datos lleguen al servidor.
- Facilita el diagnóstico de problemas de conectividad al confirmar si se usa UDP o TCP y si el dispositivo alcanza d.plaspy.com o la IP del servidor.
- Aclara qué fuentes de telemetría como GNSS, CAN, BLE y E/S se esperan y cómo se mapean a los campos de Plaspy.
- Apoya la planificación para escenarios offline al entender la capacidad de búfer y el comportamiento de carga automática.
- Ayuda a coordinar actualizaciones de firmware y cambios de configuración que pueden alterar la forma en que el dispositivo reporta a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el TS101 Basic EV CAN con Plaspy ofrece visibilidad práctica de la flota para organizaciones que necesitan posicionamiento preciso, telemetría basada en CAN para vehículos eléctricos o de combustión, y registro offline confiable. La combinación de GNSS interno, interfaz CAN, BLE para sensores de corto alcance y un búfer robusto soporta casos de uso comunes como reproducción de rutas, monitoreo de batería y rendimiento de EV, alertas antirrobo y asociación de sensores.

Plaspy simplifica el despliegue al usar un endpoint de servidor compartido y un único puerto para todos los dispositivos, detectando automáticamente el protocolo del rastreador para su ingestión y procesamiento. Para conocer más sobre Plaspy y sus funciones visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente del protocolo y las notas de firmware con el fabricante en https://www.itriangle.net/.
