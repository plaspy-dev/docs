---
slug: /arusnavi/integral_4
id: integral_4
sidebar_label: Integral 4
sidebar_class_name: menu_item_tracker
---
# Arusnavi - Integral 4

![Integral 4](./tracker.png)

Integral 4 es un rastreador GPS compacto compatible con Plaspy y un controlador de navegación universal diseñado para la gestión profesional de flotas, telemetría y monitorización de vehículos. Construido alrededor de un microcontrolador potente con GNSS de múltiples constelaciones \(GPS, GLONASS, Galileo, BeiDou, QZSS\) y antenas internas celulares y de navegación, Integral 4 ofrece un seguimiento en tiempo real preciso y una amplia recopilación de datos a bordo que se integra sin problemas con Plaspy para la monitorización centralizada y la generación de informes.

Diseñado para instalaciones en espacios restringidos, Integral 4 combina conectividad 2G GSM con soporte para doble SIM, BLE interno y un amplio conjunto de interfaces cableadas \(USB, 1-WIRE, RS-485/CAN, UART/RS-232 opcional\). Esta flexibilidad hace que el dispositivo sea ideal para telemetría de flotas, monitorización de combustible, control de transporte de pasajeros y supervisión de activos, donde se requieren dispositivos compatibles con Plaspy para una ingestión de datos, alertas y análisis sin interrupciones.

## Key Highlights

- Rastreador GPS compatible con Plaspy con soporte multi-GNSS para un seguimiento en tiempo real fiable y obtener información de ruta.
- Módem GSM 2G con doble SIM y antenas internas para una instalación más sencilla y conectividad continua.
- Interfaces cableadas e inalámbricas extensas \(USB, 1-WIRE, RS-485/CAN, UART \(opcional\), RS-232 \(opcional\), BLE interna\) para recoger datos de telemetría y sensores.
- Empareja con hasta 10 sensores Bluetooth y admite una amplia lista de dispositivos BLE compatibles para temperatura, proximidad y telemetría auxiliar.
- Rango de alimentación apto para uso empresarial \(8–50 V\), batería interna de respaldo \(300–1800 mAh\) y registro de caja negra de hasta ~100,000 registros para continuidad offline.
- I/O configurable para detección de eventos y control: múltiples entradas/salidas discretas y una entrada analógica ADC para integración de ignición, puertas, alarmas y actuadores.
- Formato compacto \(70 x 52 x 22 mm, ~50 g\) adecuado para instalaciones estrechas en vehículos y activos móviles.

## How It Works with Plaspy

Integral 4 se integra con Plaspy transmitiendo la posición GNSS, telemetría CAN/UART, lecturas de sensores y eventos de entrada discreta a través de su enlace celular hacia los servidores de monitoreo de Plaspy. El dispositivo admite protocolos industriales estándar y configuraciones de servidor ajustables, de modo que la ubicación, los datos de diagnóstico y los registros de eventos aparecen en los paneles de Plaspy como seguimiento en tiempo real, alertas e informes históricos.

- Actualizaciones de ubicación y telemetría en tiempo real desde GNSS \(GPS/GLONASS/Galileo/BeiDou/QZSS\) y buses del vehículo.
- Monitoreo de ignición y estado de puertas/alarma mediante las entradas discretas negativas y positivas del dispositivo y detección de movimiento por acelerómetro.
- Soporte de monitorización de combustible usando sensores conectados por RS-485 \(hasta 8 DУТ\) y datos de combustible CAN-bus cuando estén disponibles.
- Funcionalidad de control remoto e inmovilizador puede implementarse mediante salidas discretas configurables e integración con los flujos de trabajo de control de Plaspy.
- Sensores/balizas Bluetooth: se empareja con hasta 10 dispositivos BLE \(lista de dispositivos compatibles incluida\) para temperatura, RFID, conteo de pasajeros y otra telemetría auxiliar.
- El registro en caja negra fuera de línea almacena ~100,000 registros localmente y reenvía los datos a Plaspy cuando se restablece la conectividad, asegurando que no haya lagunas en el historial.

## Technical Overview

| Conectividad | Módem GSM 2G con soporte para doble SIM; antena celular interna; USB para configuración y datos |
| --- | --- |
| Bandas | 2G GSM \(las bandas de frecuencia específicas dependen del modelo regional\) |
| Alimentación y batería | Voltaje de operación 8–50 V; corriente típica de 1 mA \(reposo\) a 70 mA \(activo\); batería interna de respaldo 300–1800 mAh \(según variante\) |
| Interfaces | USB, 1-WIRE, UART \(opcional\), RS-232 \(opcional\), RS-485, CAN \(configurable por variante\) |
| GNSS | Multi-constelación: GPS, GLONASS, Galileo, BeiDou, QZSS; antena GNSS interna |
| Bluetooth | Módulo BLE interno; admite emparejamiento con hasta 10 sensores BLE y una lista de dispositivos compatibles \(ARNAVI, ESCORT, Teltonika Eye Sensor, Mielta, ITALON, Gicam y otros\) |
| Registro a bordo | Almacenamiento de caja negra ~32 MB \(~100,000 registros\) para registro fuera de línea |
| Entradas / Salidas | 3 entradas discretas negativas, 1 entrada discreta positiva, 1 salida discreta negativa, 1 entrada analógica ADC \(algunas E/S opcionales según variante\) |
| Protocolos & Servidores | Soporta protocolos INTERNAL, EXTERNAL, USER\_AG y EGTS; configurable con hasta dos servidores de monitorización |
| Gestión remota | Configuración remota y actualizaciones de firmware vía web; herramienta de configuración en PC por USB; aplicación móvil vía Bluetooth/USB para la instalación en sitio |
| Funciones avanzadas | Analítica EcoDriving, tacógrafo \(Shtrih\) e integraciones CAN DTA, CAN-LOG, soporte de cámara \(ZM, VC0607\), integración RFID y contador de pasajeros \(PP01\), seguimiento de evacuación de vehículo |
| Forma | Compacto: 70 x 52 x 22 mm; peso ≈ 50 g |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, historial de rutas y diagnóstico de vehículos basado en CAN para mantenimiento programado y análisis del comportamiento del conductor.
- Monitoreo de combustible y telemetría: conecte hasta ocho sensores de combustible RS-485 \(DУТ\) o utilice datos de combustible CAN para reducir pérdidas y optimizar el consumo.
- Control de transporte de pasajeros: integre contadores de pasajeros, lectores RFID y sensores BLE para ocupación, cumplimiento de la ruta y control de tarifas.
- Antirrobo y monitorización de seguridad: detecte eventos de ignición/puerta, movimiento mediante acelerómetro y dispare alertas o acciones de inmovilización mediante salidas discretas cuando esté integrado con los flujos de trabajo de Plaspy.
- Telemetría de activos y equipos: su tamaño compacto y el amplio rango de voltaje hacen de Integral 4 una solución adecuada para contenedores, remolques y equipos móviles que requieren múltiples sensores y registro sin conexión.

## Por qué elegir este rastreador con Plaspy

Elegir Integral 4 como rastreador GPS compatible con Plaspy ofrece una combinación equilibrada de seguimiento en tiempo real preciso, amplias interfaces de telemetría y registro y manejo de energía a nivel empresarial. Su posicionamiento multi‑GNSS, conectividad 2G de doble SIM y BLE interno simplifican la instalación e integración de sensores, mientras que las opciones configurables CAN/RS-485 y un conjunto completo de E/S facilitan la captura de datos de monitorización de combustible, diagnósticos y datos basados en eventos. Con configuración remota, capacidades de actualización de firmware y la documentación/mapas de comandos suministrados, Integral 4 se integra de manera eficiente en despliegues de gestión de flotas y activos impulsados por Plaspy, ayudando a reducir tiempos de inactividad, mejorar la eficiencia del combustible y fortalecer los procesos de antirrobo y monitorización sin complicaciones.

