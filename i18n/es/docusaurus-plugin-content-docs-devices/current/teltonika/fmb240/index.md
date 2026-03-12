---
slug: /teltonika/fmb240
id: fmb240
sidebar_label: FMB240
sidebar_class_name: menu_item_tracker
---
# Teltonika - FMB240

![FMB240](./tracker.png)

El FMB240 es un rastreador GPS compacto, compatible con Plaspy, diseñado para instalaciones exigentes de vehículos y activos. Al estar alojado en una carcasa resistente al agua con clasificación IP67, el FMB240 aporta telemetría fiable del bus CAN y sensorización ambiental a los flujos de trabajo de gestión de flotas y monitorización de activos. Su chip CAN integrado y el soporte Bluetooth® LE lo convierten en una opción versátil para integradores que buscan hardware compatible con Plaspy que lea diagnósticos del vehículo y se conecte con sensores inalámbricos.

Diseñado para uso en flotas y movilidad eléctrica, el FMB240 lee datos CAN de automóviles ligeros y eléctricos, camiones, autobuses y maquinaria especial mediante las opciones LV-CAN200 o ALL-CAN300. El dispositivo admite conectividad GSM global 2G \(bandas B2/B3/B5/B8\) y está disponible en varias variantes de embalaje y códigos de pedido. Nota: el fabricante indica un estado de Fin de Vida \(EOL\) en la página del producto — verifique la disponibilidad y el soporte actuales antes de la compra.

## Aspectos clave

- Perfil de rastreador GPS compatible con Plaspy para seguimiento en tiempo real e integración con la gestión de flotas.
- Carcasa robusta con clasificación IP67 y cierre de dos fases tipo click, para protección contra polvo y agua en despliegues en campo adversos.
- Lectura directa de datos del bus CAN mediante chip CAN integrado \(LV-CAN200 o ALL-CAN300\) para capturar diagnósticos del vehículo y telemetría.
- Cobertura GSM 2G global en las bandas B2/B3/B5/B8 para opciones amplias de conectividad celular.
- Bluetooth® LE para emparejar balizas y sensores externos \(temperatura, humedad, movimiento, detección magnética\) para ampliar la telemetría.
- Múltiples códigos de pedido estándar y personalizados \(ejemplos: FMB240BT2X01, FMB240YN2X01, FMB240BT2F01, FMB240YN2F01\). El contenido de la caja estándar descrito por el fabricante incluye 5 unidades por caja, cable de alimentación y módulo CAN.
- Formato compacto apto para vehículos, plataformas de movilidad eléctrica, maquinaria de utilidad y otros activos móviles.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el FMB240 suministra la ubicación del vehículo y la telemetría derivada de CAN al panel de seguimiento en tiempo real y al motor de informes de Plaspy. Plaspy normaliza los mensajes CAN y los datos de sensores para que los gestores de flotas puedan ver diagnósticos del vehículo, generar alertas y analizar métricas operativas junto con la ubicación GPS. Esto crea una vista unificada para decisiones basadas en telemetría y flujos de trabajo de antirrobo.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para rastreo en vivo y reproducción de historial.
- Señales de encendido y estado obtenidas por CAN \(donde esté disponible en la red CAN del vehículo\) pueden ser interpretadas por Plaspy para detección de trayectos e información del estado del motor.
- Monitoreo de combustible y otros parámetros del vehículo disponibles vía CAN cuando la red del vehículo lo admite y están mapeados en Plaspy.
- Los flujos de trabajo de inmovilización remota o anti‑robo pueden implementarse mediante canales de control derivados de CAN cuando la instalación y el vehículo lo permiten; consulte guías de instalación e integración de Plaspy.
- Los sensores y balizas Bluetooth se emparejan con el FMB240 para proporcionar telemetría ambiental \(temperatura, humedad, movimiento, detección magnética\) que Plaspy puede visualizar y alertar.

## Resumen técnico

| Conectividad | 2G GSM \(global\) — bandas soportadas B2, B3, B5, B8 |
| --- | --- |
| Bandas | B2 / B3 / B5 / B8 \(2G GSM\) |
| Alimentación & Batería | Alimentado por el vehículo; el contenido del paquete estándar incluye un cable de alimentación \(0.9 m\). Verifique las opciones de batería de respaldo con el fabricante. |
| Interfaces | Chip integrado de lectura de datos CAN \(opciones LV-CAN200 o ALL-CAN300\). Las entradas/salidas y la E/S adicional dependen del paquete y del cableado por parte del instalador. |
| GNSS | Capacidad de seguimiento de vehículos \(rastreado por GPS según la clase de producto\). Consulte la documentación del fabricante para los detalles completos de GNSS. |
| Bluetooth | Bluetooth® LE para sensores y balizas externos \(temperatura, humedad, movimiento, detección magnética\) |
| Gestión remota | Firmware, descargas y recursos de soporte disponibles a través del soporte de producto y la base de conocimiento del fabricante; confirme el estado de soporte actual debido al aviso de EOL. |
| Formato | Carcasa compacta con clasificación IP67 y cierre de dos fases tipo click — diseñada para instalaciones en vehículos y activos robustos |
| Variantes y embalaje | Múltiples códigos de pedido estándar y personalizados \(ejemplos: FMB240BT2X01, FMB240YN2X01, FMB240BT2F01, FMB240YN2F01\). El contenido de la caja estándar descrito por el fabricante incluye 5 unidades por caja, cable de alimentación y módulo CAN. |

## Casos de uso

- Gestión de flotas y optimización de rutas: combine el seguimiento en tiempo real con telemetría CAN para operaciones eficientes y reducción de tiempos de inactividad.
- Monitoreo y recuperación ante robo: el seguimiento en vivo de Plaspy y el estado basado en CAN pueden soportar alertas y flujos de inmovilización cuando sean compatibles.
- Telemetría para movilidad eléctrica y vehículos utilitarios: lea datos de batería y CAN específicos del vehículo para coches eléctricos y maquinaria utilitaria mediante los módulos LV-CAN200 / ALL-CAN300.
- Monitoreo ambiental con sensores Bluetooth: supervise temperatura, humedad o vibración en el interior de activos y visualice las lecturas en Plaspy.
- Seguimiento de maquinaria especial y activos: la carcasa robusta con IP67 hace que el dispositivo sea adecuado para entornos difíciles y equipos al aire libre.

## Por qué elegir este rastreador con Plaspy

El FMB240 es una opción práctica cuando necesitas un hardware compatible con Plaspy que aporte telemetría a nivel CAN, sensado ambiental y protección robusta a tu programa de flotas o activos. Su carcasa compacta con IP67 y el soporte Bluetooth LE lo hacen flexible para implementaciones mixtas, mientras que el chip CAN integrado habilita diagnósticos ricos del vehículo sin gateways adicionales. Combinado con Plaspy, el FMB240 ofrece seguimiento en tiempo real consolidado, telemetría y alertas para que los equipos de operaciones actúen sobre datos precisos del vehículo y de los sensores.

Antes de la compra, confirme la disponibilidad actual y el soporte a largo plazo: la página del producto indica que el FMB240 está en Fin de Vida \(EOL\). Si necesita una solución compatible con Plaspy hoy, consulte las guías de integración de Plaspy y la base de conocimientos del fabricante para el firmware, diagramas de cableado exactos y las variantes de paquete recomendadas.

