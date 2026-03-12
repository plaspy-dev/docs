---
slug: /eelink/tk419
id: tk419
sidebar_label: TK419
sidebar_class_name: menu_item_tracker
---
# EElink - TK419

![TK419](./tracker.jpg)

El TK419 es un rastreador GPS 4G compacto diseñado para flotas de vehículos y seguridad de activos. Construido para un seguimiento en tiempo real confiable, la unidad admite posicionamiento de múltiples constelaciones \(GPS, GLONASS, BeiDou y QZSS\) y transmite telemetría a través de redes GPRS y LTE Cat 1. Con un formato reducido \(89 × 37 × 12 mm\) y una carcasa resistente al agua IP65, TK419 se integra discretamente en automóviles, camiones y activos móviles, mientras ofrece datos de ubicación y alarmas continuos para plataformas compatibles con Plaspy.

Listo para Plaspy, el TK419 se integra con Plaspy para ubicación en tiempo real, alertas y flujos de trabajo de gestión de flotas. Ofrece detección de encendido \(ACC\), desactivación remota del motor mediante relé \(inmovilizador\) opcional, alarmas por choque y vibración, geocercas y configuración remota a través de la plataforma, la aplicación o SMS. El TK419 está orientado a empresas que requieren una protección antirrobo confiable, telemetría en tiempo real e integración sencilla mediante el protocolo EELINK.

## Puntos clave

- Rastreador GPS 4G compatible con Plaspy para seguimiento en tiempo real fiable y gestión de flotas.
- Soporte multi‑GNSS \(GPS/GLONASS/BeiDou/QZSS\) para mejorar la precisión de la posición y acelerar la obtención de la señal.
- Detección ACC \(encendido\) y, si se desea, un relé para inmovilizar de forma remota el motor \(inmovilizador\).
- Alarmas de choque/aceleración y vibración, alarma de velocidad con corte por exceso de velocidad y geocerca para seguridad y cumplimiento.
- Puertos GPIO personalizables para conectar sensores de telemetría, permitiendo monitoreo de combustible y otros datos del vehículo cuando sea necesario.
- Batería de respaldo de 140 mAh para alertas por pérdida de energía y continuidad de los informes durante breves interrupciones.
- Diseño compacto y robusto \(IP65\) y amplio rango de entrada de 9–72 V DC para instalaciones versátiles en vehículos.

## Cómo funciona con Plaspy

TK419 envía posiciones GNSS y telemetría de estado a Plaspy mediante datos móviles \(GPRS/LTE Cat 1\). Plaspy procesa datos de ubicación, alarmas y IO, convirtiendo mensajes en mapas en tiempo real, alertas e informes para gestores de flotas. La integración utiliza el protocolo EELINK compatible con el dispositivo y los mecanismos estándar de ingesta de Plaspy, de modo que puedas desplegar a escala sin necesidad de gateways personalizados.

- Actualizaciones de ubicación y telemetría en tiempo real a través de LTE Cat 1 o, si falla, GPRS.
- Estado de encendido \(ACC\) para detección de trayectos y correlación de eventos de combustible/consumo.
- Control de relé opcional para acciones de inmovilización remota disparadas desde paneles o reglas de Plaspy.
- Alarmas de choque/aceleración y vibración enviadas de inmediato a Plaspy para una respuesta rápida ante incidentes.
- Eventos de geocerca, alarmas de velocidad y corte por exceso de velocidad se reportan a Plaspy para alertas y registros de cumplimiento.
- Notificaciones de batería de respaldo en caso de pérdida de energía para proteger contra manipulación e intentos de robo.
- Entradas GPIO personalizables permiten enviar telemetría como monitoreo de combustible a Plaspy cuando haya sensores conectados.

## Resumen técnico

| Conectividad | GPRS y LTE Cat 1 |
| --- | --- |
| GNSS | GPS, GLONASS, BeiDou, QZSS |
| Entradas / Salidas | Detección ACC; puertos GPIO personalizables; relé opcional \(inmovilización\); botón SOS opcional |
| Alarmas y Alertas | Alarma de choque/aceleración, alarma de vibración, alarma de velocidad con corte por exceso de velocidad, geocerca |
| Batería de respaldo | 140 mAh \(alertas por pérdida de energía\) |
| Alimentación | Entrada 9–72 V DC |
| Grado de Protección | IP65 resistente al agua |
| Protocolo e Integración | Protocolo EELINK; configuración remota vía plataforma/aplicación/SMS |
| Dimensiones y Peso | 89 × 37 × 12 mm, 46 g |
| Factor de Forma | Rastreador compacto para montaje discreto en vehículos |

## Casos de uso

- Antirrobo de flotas e inmovilización: utilice detección ACC y relé remoto para asegurar los vehículos de forma remota.
- Gestión de comportamiento del conductor y seguridad: monitorice la velocidad, active el corte por exceso de velocidad y registre eventos de choque/vibración para su revisión.
- Control de sitio basado en geocerca: genere alertas de entrada/salida para patios, rutas programadas o zonas restringidas.
- Telemetría y monitoreo de activos: conecte sensores de telemetría mediante GPIO para monitoreo de combustible, temperatura u entradas personalizadas e informe a Plaspy.
- Respuesta ante emergencias y asistencia al conductor: botón SOS opcional y alertas inmediatas de choque para una notificación más rápida de incidentes.

## Por qué elegir este rastreador con Plaspy

El TK419 ofrece un equilibrio práctico entre un diseño compacto, amplia compatibilidad con vehículos y una integración lista para Plaspy, para empresas que requieren seguimiento en tiempo real confiable y controles antirrobo. Su receptor multi‑GNSS y la función de respaldo celular aseguran informes de posición continuos, mientras la detección ACC y el relé inmovilizador opcional soportan flujos de trabajo comunes de gestión de flotas y seguridad. La flexibilidad de los GPIO del dispositivo permite ampliar la telemetría, por ejemplo monitoreo de combustible, y enviar esas métricas a Plaspy para informes y alertas centralizados.

Para integradores de sistemas y operadores de flotas, la compatibilidad con EELINK y la configuración remota a través de plataforma/aplicación/SMS reducen la fricción de implementación y la carga de gestión continua. Combinado con los paneles de Plaspy y su motor de reglas —y en implementaciones que también utilizan sensores Bluetooth para necesidades específicas de telemetría—, el TK419 se convierte en un nodo robusto dentro de una solución escalable de gestión de flotas y antirrobo. Elija TK419 con Plaspy para un seguimiento fiable, una detección rápida de incidentes y una integración sencilla en ecosistemas telemáticos existentes.

