---
slug: /gosafe/gtu60
id: gtu60
sidebar_label: GTU60
sidebar_class_name: menu_item_tracker
---
# Gosafe - GTU60

![GTU60](./tracker.webp)

El GTU60, de un OEM probado, es un rastreador GPS económico y completo, diseñado para una instalación rápida y una integración fiable con Plaspy. Orientado al seguimiento de flotas comerciales ligeras, alquiler y operaciones BHPH, así como a la recuperación de vehículos robados, el GTU60 combina conectividad LTE CAT1 y 2G con un receptor GNSS de alta sensibilidad de 32 canales GPS/GLONASS/BeiDou y AGPS para ofrecer seguimiento y telemetría en tiempo real consistentes en la plataforma de Plaspy.

Compacto y a prueba de manipulaciones, el GTU60 cuenta con una carcasa IP65 resistente al agua, antenas internas y un amplio rango de tensión de entrada para sistemas de 12 V y 24 V. Su diseño de bajo consumo, el acelerómetro a bordo capaz de registrar impactos y sus entradas/salidas simples lo convierten en una opción práctica para la gestión de flotas, flujos de anti-robo y el control remoto del inmovilizador cuando se integra a través de Plaspy.

## Puntos clave

- Seguimiento en tiempo real compatible con Plaspy: datos LTE/GPRS y reportes TCP/SMS para actualizaciones continuas de ubicación y telemetría.
- GNSS de alta sensibilidad: receptor de 32 canales GPS/GLONASS/BeiDou con precisión SBAS \(~10 m CEP\) y sensibilidad de seguimiento de hasta −162 dBm.
- Alimentación y respaldo de grado vehicular: entrada DC de 9–90 V, adecuada para sistemas de 12 V y 24 V, además de una batería de respaldo Li‑ion recargable de 220 mAh.
- Bajo consumo de energía: corriente en reposo ≈4 mA a 12 V y ~29 mA durante el seguimiento activo para prolongar la disponibilidad del vehículo y reducir el consumo parasitario.
- Soporte anti-robo e inmovilizador: detección de encendido 1-wire y una salida digital de drenaje abierto \(open-drain\) para corte de arranque o flujos de inmovilización controlados por relé.
- Telemetría de choques y movimiento: acelerómetro 3D registra eventos de choque a 50 Hz para el registro de accidentes y alertas automáticas a través de Plaspy.
- Formato compacto y a prueba de manipulaciones: SIM y antenas internos, diseño IP65 resistente al agua y opciones de montaje flexibles para instalaciones discretas.

## Cómo funciona con Plaspy

Al instalarse en un vehículo, el GTU60 transmite su ubicación y telemetría a Plaspy utilizando la conexión LTE \(CAT1\) o 2G mediante TCP o SMS. Plaspy ingiere la posición GNSS del dispositivo, los eventos del acelerómetro y el estado de las E/S para ofrecer seguimiento en tiempo real, enrutamiento de alarmas y reportes históricos. La integración utiliza flujos telemáticos estándar, de modo que los gestores de flotas pueden habilitar mapas en tiempo real, alertas de geocerca, informes de viajes y respuestas automáticas ante anti-robo sin necesidad de configuraciones complejas.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas por LTE/GPRS \(TCP\) o SMS para redundancia.
- Detección de encendido \(1-wire\) reportada a Plaspy para tiempo de funcionamiento, puntuación del conductor y alertas de arranque no autorizado.
- Detección de choques e registro de impactos mediante el acelerómetro 3D, habilitando notificaciones automáticas de incidentes.
- Capacidad de inmovilización remota mediante la salida digital de drenaje abierto con módulos de relé \(la integración para corte de arranque es compatible a través de accesorios\).
- Monitoreo de combustible y datos de sensores de temperatura disponibles a través de sensores de posventa compatibles e integraciones serial/1-wire; Plaspy puede mapear estas entradas en paneles de monitoreo de combustible y telemetría.

## Visión general técnica

| Conectividad | LTE CAT1 y GPRS \(2G\); comunicación TCP y SMS |
| --- | --- |
| Bandas | LTE: B1/B2/B3/B4/B5/B7/B8/B20/B28/B66; 2G GSM: 850/900/1800/1900 MHz |
| Alimentación y batería | Entrada 9–90 V DC \(compatible 12 V y 24 V\); batería de respaldo Li‑ion recargable integrada de 220 mAh; sueño de bajo consumo ≈4 mA @12 V, activo ≈29 mA |
| Interfaces | Detección de encendido 1-wire; una salida digital de drenaje abierto \(máx. 300 mA\); conector Molex de 10 pines; LEDs de estado para GPS/celular; SIM y antenas internos |
| GNSS | Receptor de 32 canales GPS/GLONASS/BeiDou con AGPS; precisión SBAS ≈10 m CEP; sensibilidad de seguimiento hasta −162 dBm |
| Bluetooth | N/A \(no reporta Bluetooth a bordo\) |
| Gestión remota | El dispositivo almacena ~3000 registros en una memoria flash de 4 Mbit; gestión FOTA/web no especificada |
| Formato | Compacto: 78 × 33 × 15 mm; ~35 g \(con batería\); IP65 a prueba de agua \(se indica IPX5\); montaje mediante bridas, Velcro o adhesivo |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, historial de viajes, informes basados en el encendido y telemetría de comportamiento del conductor para vehículos comerciales ligeros.
- Anti-robo y recuperación de vehículos: instalación encubierta con antenas internas y SIM interna, además de inmovilización remota mediante control de relé.
- Monitoreo de alquiler y BHPH: aplicar geocercas, monitorizar pagos y detectar uso no autorizado mediante detección de encendido y telemetría GPS reportadas a Plaspy.
- Monitoreo de combustible e integraciones de sensores: integre sensores de combustible, sondas de temperatura o kits de identificación de conductor iButton para ampliar los paneles de Plaspy con telemetría por vehículo.
- Informe de accidentes e incidentes: el acelerómetro a bordo captura eventos de choque a 50 Hz para alertas rápidas y análisis postincidente en Plaspy.

## Por qué elegir este rastreador con Plaspy

Elegir el GTU60 para una implementación compatible con Plaspy ofrece a los propietarios de flotas un rastreador GPS rentable y de bajo consumo, con una diversidad celular probada y un rendimiento fiable de GNSS. Su amplio soporte de bandas LTE y 2G garantiza conectividad en áreas con cobertura mixta, mientras que su diseño compacto IP65 y las antenas/SIM internas permiten instalaciones discretas para aplicaciones de anti-robo y alquiler. Con detección de encendido, una salida digital capaz de accionar un relé para inmovilización, acelerometría capaz de registrar impactos y expansión serial/1-wire para sensores de combustible o temperatura, el GTU60 cubre las necesidades clave de gestión de flotas, telemetría y flujos de anti-robo.

Integrado con Plaspy, el GTU60 pasa a formar parte de un ecosistema telemático escalable: permite seguimiento en tiempo real, alertas automatizadas, opciones de inmovilización remota y reportes a nivel de flota, todo ello manteniendo una instalación simple y un bajo costo total de propiedad. Para operadores que buscan un rastreador GPS económico que soporte funciones esenciales de flota y anti-robo, el GTU60 es una opción práctica compatible con Plaspy.

