---
slug: /teltonika/tft100
id: tft100
sidebar_label: TFT100
sidebar_class_name: menu_item_tracker
---
# Teltonika - TFT100

![TFT100](./tracker.png)

El Teltonika TFT100 es un rastreador GPS 2G robusto diseñado para la movilidad eléctrica y vehículos industriales de alto voltaje — carretillas elevadoras, manipuladores telescópicos, cargadores y otras maquinarias pesadas. Compatible con Plaspy desde la instalación inicial, el TFT100 ofrece fijaciones de posición fiables y telemetría de vehículo rica en entornos exteriores desafiantes gracias a su carcasa con clasificación IP67 y un amplio rango de entrada de energía de 10–97 V. Diseñado para flotas y activos que operan en condiciones exigentes, el TFT100 aporta las capacidades básicas que esperan los gestores de flotas: rendimiento fiable del rastreador GPS, integración con el bus del vehículo y soporte de sensores extensible.

Cuando se integra con Plaspy, el TFT100 habilita seguimiento en tiempo real, visualización de telemetría y flujos de trabajo de gestión de flotas adaptados a operaciones de movilidad eléctrica. Sus múltiples interfaces cableadas e conectividad Bluetooth Low Energy permiten capturar datos del bus CAN, lecturas de sensores BLE y señales de estado que alimentan alertas anti-robo, tableros de gestión de baterías e informes operativos. Nota: Teltonika lista el TFT100 como Fin de Vida Útil; confirme la disponibilidad y opciones de reemplazo con el soporte o ventas de Teltonika antes de la implementación.

## Aspectos destacados

- Carcasa robusta con clasificación IP67, diseñada para uso en exteriores en vehículos industriales de alto voltaje y maquinaria pesada.
- Amplia compatibilidad de alimentación del vehículo \(10–97 V\) que elimina la necesidad de convertidores externos en plataformas de movilidad eléctrica.
- Módem celular 2G para una conectividad amplia en regiones soportadas, apto para el seguimiento de ubicación y la transmisión de telemetría.
- Integración directa con el vehículo mediante interfaces CAN, RS232, RS485 y UART para acceder a BMS y telemetría a bordo.
- Bluetooth Low Energy \(BLE\) para emparejar sensores externos y balizas \(temperatura, humedad, magnetismo/movimiento, identificación de activos\).
- Variantes de interfaces y códigos de pedido múltiples para una instalación flexible y opciones de empaquetado personalizadas.
- Configurable con las herramientas de Teltonika \(FOTA WEB, Teltonika Configurator y wiki del producto\) para simplificar la configuración y el parsing de CAN para la ingesta en Plaspy.

## Cómo funciona con Plaspy

Conectar el TFT100 a Plaspy le proporciona seguimiento en tiempo real y telemetría para flotas de movilidad eléctrica e industriales. Configure el dispositivo con Teltonika Configurator y FOTA WEB para definir los parámetros de comunicación celular y las reglas de parsing CAN, y dirija luego el flujo de telemetría del rastreador a su instancia de Plaspy. Plaspy recibe datos de ubicación y sensores y los convierte en mapas en tiempo real, alertas, rutas históricas y paneles de telemetría adecuados para la gestión de flotas y la planificación de mantenimiento.

- Las actualizaciones de ubicación y telemetría en tiempo real aparecen en Plaspy para monitoreo en vivo y reproducción histórica.
- Los datos del bus del vehículo \(CAN/RS232/RS485/UART\) pueden proporcionar métricas de BMS, indicadores de estado de carga y otra telemetría a Plaspy.
- Los sensores Bluetooth permiten a Plaspy recolectar datos de temperatura, humedad, eventos de movimiento/magneto y balizas de identificación de activos.
- Utilice eventos derivados de CAN \(por ejemplo, estado de carga o señales de puerta/alerta\) para activar alertas de Plaspy y flujos de trabajo anti-robo.
- Consulte a Teltonika para obtener detalles sobre la configuración de adaptadores CAN sin contacto y la derivación de campos analizados en los informes de Plaspy.

## Resumen técnico

| Modelo | TFT100 \(Teltonika\) |
| --- | --- |
| Conectividad | Módem celular 2G |
| Bandas / Frecuencia | 2G \(los detalles de frecuencia varían según la variante regional; consulte la documentación del producto\) |
| Alimentación y batería | Amplio rango de entrada 10–97 V \(apto para sistemas de alta tensión de movilidad eléctrica\). No se especifica batería de respaldo interna en la documentación estándar. |
| Interfaces | Variantes con CAN, RS485, RS232 o UART. Obtención de datos CAN sin contacto soportada mediante adaptadores compatibles. Los paquetes estándar incluyen cable de alimentación; algunos paquetes personalizados incluyen un cable micro USB. |
| GNSS | Seguimiento de posición GPS para informes de ubicación en tiempo real \(precisión según condiciones GNSS; consultar especificaciones del fabricante\). |
| Bluetooth | BLE \(Bluetooth Low Energy\) para sensores externos y balizas \(temperatura, humedad, magnetismo/movimiento, identificación de activos\). |
| Gestión remota | Compatible con herramientas de Teltonika: FOTA WEB, Teltonika Configurator y wiki del producto para actualizaciones de firmware y configuración. |
| Factor de forma | Unidad robusta con clasificación IP67 destinada a instalaciones en vehículos y equipos pesados; existen múltiples paquetes y códigos de pedido disponibles. |
| Pedidos / Fin de vida útil | Códigos de producto típicos: TFT100TSTAA0 \(CAN\), TFT100TSRAB0 \(RS485\), TFT100TRSAC0 \(RS232\), TFT100TURAD0 \(UART\). Códigos personalizados disponibles; listado como Fin de Vida Útil por el fabricante — verifique la disponibilidad. |

## Casos de uso

- Monitoreo de BMS para carretillas elevadoras eléctricas y vehículos industriales eléctricos — captura de métricas de la batería y telemetría de estado de carga vía CAN para mantenimiento predictivo.
- Gestión de flotas de movilidad eléctrica — seguimiento en tiempo real y análisis de uso para optimizar rutas, recargas y disponibilidad en servicios de vehículos compartidos.
- Despliegue de maquinaria pesada — seguimiento de posición y telemetría de operación para manipuladores telescópicos, cargadores y equipos al aire libre en condiciones exigentes.
- Sensores ambientales y de activos — sensores BLE conectados de temperatura y humedad y balizas de magnetismo/movimiento para monitoreo de cadena de frío o anti-tamper.
- Flujos de anti-robo y seguridad — alimentar eventos del bus del vehículo y alertas de balizas BLE en Plaspy para activar inmovilización o rutinas de alarma cuando se combinan con controles del vehículo apropiados.

## Por qué elegir este rastreador con Plaspy

Emparejar el Teltonika TFT100 con Plaspy ofrece a los equipos de flota y operaciones una solución enfocada para la movilidad eléctrica y la gestión de vehículos industriales. La amplia entrada de energía y la construcción IP67 del rastreador lo hacen fiable para instalaciones robustas, mientras que las interfaces CAN y serie directas proporcionan telemetría rica para BMS, seguridad de la batería y analítica operativa. Los sensores Bluetooth amplían la visibilidad para el monitoreo ambiental y la identificación de activos. Al usar Plaspy como plataforma, obtendrá seguimiento en tiempo real, alertas basadas en telemetría y funciones de gestión de flotas sin necesidad de reconstruir integraciones: Plaspy consume la telemetría del rastreador y la convierte en paneles de control e informes accionables.

Antes de la compra, confirme la disponibilidad actual y las implicaciones de Fin de Vida Útil con el equipo de ventas de Teltonika. Para la implementación, utilice Teltonika Configurator y FOTA WEB para preparar el TFT100, definir las reglas de parsing CAN y emparejar sensores BLE para que Plaspy pueda mostrar de inmediato la ubicación, la telemetría y las alertas para una gestión de flotas eficiente y operaciones de anti-robo.

