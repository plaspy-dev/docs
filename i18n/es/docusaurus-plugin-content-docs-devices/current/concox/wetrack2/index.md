---
slug: /concox/wetrack2
id: wetrack2
sidebar_label: WeTrack2
sidebar_class_name: menu_item_tracker
---
# Concox - WeTrack2

![WeTrack2](./tracker.png)

El WeTrack2 es un rastreador GNSS compacto para vehículos, diseñado para patinetes eléctricos, motocicletas, vehículos ligeros y equipos industriales. Construido según estándares de electrónica industrial con una carcasa clasificada IP65 y un amplio rango de operación de 9–90 VDC, WeTrack2 ofrece seguimiento en tiempo real fiable y capacidades de gestión de flotas, al tiempo que minimiza el consumo de batería y el tiempo de inactividad. Este rastreador GPS compatible con Plaspy aporta telemetría esencial y controles anti-robo—tales como detección de encendido \(ACC\) y corte remoto de combustible y energía—a un paquete pequeño y resistente para uso en campo.

Diseñado para operadores que requieren ubicación precisa, alertas de eventos de conducción e integración sencilla, el WeTrack2 ofrece una precisión de posición de &lt; 2.5 m y una sensibilidad GNSS de largo alcance. Su formato compacto, su batería de respaldo a bordo y su almacenamiento local de datos lo convierten en una opción sólida cuando se exige visibilidad continua y control remoto del inmovilizador. Integre WeTrack2 con Plaspy para desbloquear paneles en tiempo real, alertas e informes para una supervisión de flota más eficiente y una recuperación de vehículos robados más rápida.

## Aspectos clave

- Rastreador GPS compatible con Plaspy que ofrece un seguimiento en tiempo real confiable para scooters, motocicletas y vehículos ligeros.
- Carcasa robusta IP65 y diseño de grado industrial para gestión de flotas en exteriores y aplicaciones anti-robo.
- Amplio rango de operación 9–90 VDC que se adapta a una amplia gama de vehículos, incluidos scooters, carritos de golf y equipos industriales.
- Capacidad de inmovilización remota \(relé externo\) para cortar combustible y energía, para apoyar la respuesta ante robos y el control operativo.
- GNSS de alta sensibilidad \(GPS + BDS + LBS\) con precisión de &lt; 2.5 m CEP para ubicación y monitoreo de rutas.
- Diseño de bajo consumo y protección optimizada de la batería con una batería de respaldo Li-Polymer de 270 mAh para evitar el drenaje de la batería del vehículo.
- Detección de eventos a bordo \(acelerómetro\) para alertas de conducción, avisos de exceso de velocidad y notificaciones de movimiento.

## Cómo funciona con Plaspy

Cuando se combina con Plaspy, el WeTrack2 transmite la ubicación y la telemetría del vehículo a la plataforma de Plaspy para seguimiento en tiempo real, alertas e informes históricos. Plaspy ingiere posiciones GNSS, disparadores de eventos y actualizaciones de estado del rastreador, convirtiéndolos en geocercas, alertas de velocidad, informes de encendido y métricas del panel de control sobre las que puede actuar de inmediato.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas desde GPS/BDS/LBS a Plaspy para seguimiento en vivo y reproducción.
- Detección de encendido \(ACC\) registrada en Plaspy para indicar el estado de encendido/apagado del vehículo y activar eventos de flujo de trabajo.
- Alertas de movimiento, exceso de velocidad y entrada/salida de geocercas para una gestión de flota proactiva y asesoramiento a los conductores.
- Control remoto del inmovilizador \(relé externo\) que permite a los usuarios de Plaspy ejecutar el corte de combustible y energía como respuesta anti robo.
- Almacenamiento en búfer a bordo \(32+32 Mb\) y una batería de respaldo para conservar datos y mantener los informes durante cortes de red breves.

## Resumen técnico

| Conectividad | GSM cuád-banda \(850 / 900 / 1800 / 1900 MHz\); ranura SIM estándar |
| --- | --- |
| Bandas | GSM cuád-banda \(850/900/1800/1900 MHz\) |
| Alimentación y batería | Voltaje de funcionamiento 9–90 VDC; batería de respaldo Li-Polymer industrial de 270 mAh; protección de batería optimizada y diseño de bajo consumo |
| Interfaces | Detección de encendido \(ACC\); admite relé externo para inmovilización remota \(corte de combustible/energía\); indicadores LED para GNSS, operación celular y estado de energía |
| GNSS | Posicionamiento GPS + BDS + LBS; precisión de posición &lt; 2.5 m CEP; sensibilidad GNSS -165 dBm |
| Bluetooth | No especificado en la descripción del producto |
| Gestión remota | Almacenamiento de datos a bordo \(32+32 Mb\) para registro local; configuración remota no especificada |
| Formato | Carcasa compacta, clasificación IP65; dimensiones 78.0 × 41.0 × 13.0 mm; peso 41 g; rango de temperatura de operación -20 °C a 70 °C |

## Casos de uso

- Recuperación de vehículos robados: el seguimiento en tiempo real y el control remoto del inmovilizador ayudan a localizar y recuperar motocicletas y scooters.
- Gestión de flotas para vehículos ligeros y carritos de golf: monitorizar rutas, eventos de velocidad y estado de encendido para optimizar las operaciones.
- Plataformas de uso compartido de motocicletas y scooters: su formato compacto y bajo peso favorecen despliegues de alta densidad donde se requiere telemetría continua.
- Seguimiento de equipos industriales: amplio rango de tensión \(9–90 VDC\) para admitir activos diversos y evitar drenajes de batería inesperados en campo.

## Por qué elegir este rastreador con Plaspy

Optar por el WeTrack2 como rastreador GPS compatible con Plaspy ofrece a las operaciones una combinación equilibrada de ubicación precisa, telemetría esencial y control antirobo en un paquete compacto y resistente. Su tolerancia a variaciones de voltaje, su carcasa con clasificación IP65 y su diseño de bajo consumo lo convierten en una elección fiable para flotas mixtas y entornos difíciles. Funciones integradas como detección de encendido, alertas de eventos basadas en acelerómetro, almacenamiento a bordo y una batería de respaldo aseguran un flujo de datos continuo hacia Plaspy incluso durante interrupciones breves de la red.

Para equipos de gestión de flotas centrados en la seguridad, la recuperación y la eficiencia operativa, el WeTrack2 ofrece la telemetría y la capacidad de inmovilización remota necesarias para una rápida gestión de incidentes. Aunque la descripción del dispositivo no menciona sensores Bluetooth a bordo, Plaspy admite sensores Bluetooth para temperatura, proximidad y otras telemetrías si su implementación lo requiere. En resumen, el WeTrack2 ofrece una opción práctica y de fácil integración para usuarios de Plaspy que buscan seguimiento GPS compacto, funcionalidad antirobo y seguimiento en tiempo real fiable en una gama de vehículos ligeros y activos industriales.

