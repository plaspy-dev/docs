---
slug: /okb_tehnoavtomatika/mta_glonass_ver12_m_rs_485
id: mta_glonass_ver12_m_rs_485
sidebar_label: MTA-Glonass (ver.12-M RS-485)
sidebar_class_name: menu_item_tracker
---
# OKB Tehnoavtomatika - MTA-Glonass (ver.12-M RS-485)

![MTA-Glonass (ver.12-M RS-485)](./tracker.jpg)

El MTA-Glonass \(ver.12-M RS-485\) es un rastreador GPS compatible con Plaspy y un terminal de monitorización de vehículos diseñado para operadores de flota y proveedores de servicios que requieren posicionamiento preciso e integración de sensores cableados. Al combinar un receptor GPS/GLONASS de alta sensibilidad de 50 canales con comunicaciones GSM fiables en 900/1800 \(DATA, GPRS y SMS\), esta unidad ofrece seguimiento en tiempo real, telemetría extensa y un monitoreo de combustible robusto a través de conexiones RS-485.

Desarrollado para vehículos e instalaciones de telemática, el MTA-Glonass ofrece rápida preparación técnica y bajo consumo de energía, al tiempo que soporta múltiples entradas digitales, una entrada de encendido, sensores de combustible por pulso/frecuencia y un puerto RS-485 para sensores de nivel de combustible Omnicomm y otros sensores similares. Su carcasa compacta IP30 y la batería interna permiten que el seguimiento crítico y el registro de eventos continúen durante horas tras un fallo de energía, lo que lo convierte en una opción práctica para la gestión de flotas compatible con Plaspy, anti-robo y aplicaciones de telemetría.

## Aspectos Destacados

- Rastreador GPS compatible con Plaspy con receptor GPS/GLONASS de 50 canales para un posicionamiento preciso y fiable y seguimiento en tiempo real.
- Comunicaciones GSM 900/1800 que admiten DATA, GPRS y SMS para informes flexibles al servidor y a los suscriptores.
- Interfaz RS-485 para integración directa con sensores de nivel de combustible Omnicomm y otros periféricos cableados inteligentes para un monitoreo preciso del combustible.
- Múltiples entradas digitales configurables y una entrada de encendido para el conteo de horas de funcionamiento, el control del modo de sueño y la telemetría basada en eventos.
- Batería interna recargable \(hasta 600 mAh\) y memoria de eventos no volátil \(16,000–125,000 registros según la configuración\) para preservar los datos durante pérdidas de energía.
- Bajo consumo de energía \(modos activo, inactivo y de suspensión documentados\) y rápida disponibilidad \(listo para operar en menos de 1 minuto\), ideal para la gestión continua de flotas.
- Formato compacto y ligero \(≤90 × 65 × 30 mm, \<200 g\) adecuado para instalaciones discretas en vehículos y rastreo de activos.

## Cómo Funciona con Plaspy

Cuando se integra con Plaspy, el MTA-Glonass actúa como fuente de ubicación y telemetría de sensores cableados. La unidad reporta la ubicación, eventos con marca de tiempo y datos de sensores a través de GPRS/DATA o SMS a servidores compatibles con Plaspy para seguimiento en tiempo real, alertas configurables e informes históricos. Su puerto RS-485 habilita la telemetría de nivel de combustible directo para ser enviada a los paneles de Plaspy o utilizada en las reglas de monitoreo de combustible.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy a través de GPRS/DATA o SMS para visibilidad continua.
- La entrada de encendido proporciona el estado de motor encendido/apagado y admite el conteo de horas de funcionamiento para la gestión de la flota y la planificación de mantenimiento.
- Monitoreo de combustible vía RS-485 \(Omnicomm y sensores compatibles\) y una entrada de pulso/frecuencia para sensores de combustible basados en pulsos.
- Registro de eventos y memoria no volátil con búfer aseguran que no se pierdan registros críticos incluso cuando la conectividad es intermitente.
- La salida de colector abierto opcional puede utilizarse para acciones de control remoto \(por ejemplo, inmovilizador u otras funciones de control remoto\) cuando esté configurada y soportada por los procedimientos de instalación.
- Aunque este terminal está basado en la integración cableada RS-485 en lugar de sensores Bluetooth, complementa las implementaciones de Plaspy que también incluyen dispositivos habilitados para BLE si se utilizan rastreadores compatibles con BLE en paralelo.

## Resumen Técnico

| Conectividad | GSM 900/1800; DATA, GPRS y SMS |
| --- | --- |
| Bandas | GSM 900 / GSM 1800 |
| Alimentación y batería | Entrada DC de rango amplio 9–68 V; batería interna recargable de hasta 600 mAh \(≈6 horas en espera mínimo\); activo ≤110 mA, inactivo ≤35 mA, modo suspensión ≤20 mA \(a 12 V\) |
| Interfaces | Puerto RS-485 para sensores inteligentes \(p. ej., Omnicomm\), múltiples entradas digitales de contacto seco \(polaridad configurable\), entrada de encendido, entrada de pulso/frecuencia, entrada de temperatura 1-Wire opcional, salida de colector abierto opcional \(hasta 50 V, 1,5 A\) |
| GNSS | Receptor GPS/GLONASS de alta sensibilidad de 50 canales |
| Bluetooth | No incluido \(el dispositivo se centra en la integración de sensores RS-485 cableados\) |
| Gestión Remota | Gestión remota: no especificado |
| Memoria y Eventos | Memoria interna no volátil para almacenamiento de eventos \(aprox. 16,000–125,000 registros según la configuración de la memoria\); hasta 64 eventos internos/externos configurables |
| Formato | Carcasa IP30; dimensiones no superiores a 90 × 65 × 30 mm; peso inferior a 200 g |
| Preparación Operativa | Listo para operación en menos de 1 minuto |

## Casos de Uso

- Gestión de flotas: seguimiento en tiempo real, horas de funcionamiento basadas en el encendido y registro de eventos para la optimización de rutas y la planificación del mantenimiento.
- Monitoreo de combustible y detección de pérdidas: conexión RS-485 directa a sensores Omnicomm o similares, además de una entrada de pulso/frecuencia para telemetría de combustible precisa y análisis de consumo.
- Antirrobo y control remoto: actualizaciones rápidas de ubicación y una salida de colector abierto opcional que puede configurarse para inmovilizador u otras funciones de control remoto durante un incidente de seguridad.
- Diagnóstico remoto y telemetría: registros de eventos y datos de sensores almacenados en búfer ayudan a capturar diagnósticos críticos incluso con cobertura de celular intermitente.
- Rastreo de activos y equipos: diseño compacto y bajo consumo lo hacen adecuado para una amplia gama de instalaciones de vehículos y activos donde se requieren sensores cableados.

## Por qué Elegir Este Rastreador con Plaspy

El MTA-Glonass \(ver.12-M RS-485\) es un rastreador GPS práctico, compatible con Plaspy, para clientes que priorizan un posicionamiento GNSS confiable junto con una integración avanzada de sensores cableados. Su puerto RS-485 y sus entradas configurables lo convierten en una opción natural para flotas que requieren monitoreo preciso de combustible, sensores basados en pulsos y telemetría de horas de funcionamiento. El bajo consumo de energía, una batería interna para continuidad y una amplia memoria de eventos no volátil reducen el riesgo de pérdida de datos y simplifican las operaciones de la flota.

Para gestores de flotas y proveedores de servicios que utilizan Plaspy para la monitorización centralizada, este terminal ofrece seguimiento en tiempo real fiable, alertas basadas en eventos y la telemetría cableada necesaria para el monitoreo de combustible y diagnóstico remoto. Su formato compacto y su sencillo conjunto de E/S proporcionan una base robusta para medidas antirrobo, flujos de control tipo inmovilizador y la optimización continua de la flota sin sacrificar la flexibilidad de instalación.

