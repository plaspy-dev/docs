---
slug: /autofon/e_mayak_31
id: e_mayak_31
sidebar_label: E-Mayak 3.1
sidebar_class_name: menu_item_tracker
---
# AutoFon - E-Mayak 3.1

![E-Mayak 3.1](./tracker.png)

# AvtoFon E-Mayak 3.1

El AvtoFon E-Mayak 3.1 es un rastreador GPS compacto y autónomo diseñado para un seguimiento a largo plazo y de bajo mantenimiento, donde la discreción y la duración de la batería son cruciales. Construido alrededor de un módulo GPS Quectel L10 y un módulo GSM Quectel M10, el E-Mayak 3.1 comunica ubicación y estado mediante SMS. Como rastreador compatible con Plaspy, es ideal para casos de uso que valoran el seguimiento en tiempo real bajo demanda y la recuperación ante robo sin telemetría GPRS continua ni tarifas de suscripción.

Este pequeño transmisor está optimizado para instalaciones encubiertas en vehículos, motocicletas, barcos, contenedores y sobre personas o animales cuando se requiere autonomía extendida. Su modelo de control por SMS y su autonomía en modo de reposo profundo lo hacen difícil de detectar con escáneres de radio, mientras que los enlaces de mapa mediante SMS estandar y los mensajes de posición permiten integrarlo con flujos de trabajo de Plaspy para visualización e informes.

## Aspectos clave

- Larga autonomía operativa — ciclos de vida y reposo configurables con hasta dos años en modo de espera con 2 × baterías CR123A.
- Compatible con Plaspy para rastreo en tiempo real bajo demanda mediante enlaces de coordenadas por SMS y la integración con gateways SMS.
- Formato encubierto y compacto \(70 × 50 × 21 mm\) para colocación discreta en vehículos, contenedores o para uso de rastreo personal.
- Resistente a interferencias temporales de GSM/GPS al permanecer en autonomía de reposo profundo y reanudar la comunicación cuando vuelven las señales.
- Control por SMS sencillo y configuración protegida por PIN — sin tarifas de suscripción, solo costos de SMS salientes.
- Posicionamiento GPS y respaldo extendido LBS \(torres de telefonía celular\) para mejorar la cobertura en condiciones GPS marginales.
- Telemetría esencial: monitoreo de descarga de batería, detección de temperatura, alertas de saldo SIM y SMS de latido \(señal de vida\).

## Cómo funciona con Plaspy

El AvtoFon E-Mayak 3.1 comunica la ubicación y la telemetría principalmente por SMS. Cuando se usa con Plaspy, estos mensajes SMS pueden integrarse en Plaspy de dos formas habituales: reenviando el contenido del SMS a los canales de entrada de Plaspy \(entrada manual o gateway SMS a API\) o pegando los enlaces de mapa y las coordenadas incluidos en la plataforma Plaspy para su visualización e informes. Esto hace que el dispositivo sea compatible con Plaspy para flujos de trabajo que requieren verificaciones de ubicación en tiempo real, casi en tiempo real, en lugar de una transmisión continua por GPRS.

- Actualizaciones de ubicación y telemetría en tiempo real bajo demanda vía SMS \(coordenadas GPS y dos formatos de enlace de mapa por SMS\).
- Estado de batería y telemetría de temperatura reportados por SMS para monitoreo remoto básico y alertas de mantenimiento.
- Mensaje de latido configurable \("señal de vida"\) por SMS para confirmar el estado del dispositivo según un calendario compatible con los intervalos de reporte de Plaspy.
- Notificaciones de seguridad: protección PIN, alertas ante intentos de acceso con contraseña incorrecta y cambios de número de propietario.
- Numeración secuencial de SMS y monitoreo de saldo para facilitar la correlación de mensajes en los registros y paneles de Plaspy.

## Visión técnica

| Conectividad | Control y reporte vía SMS GSM \(Quectel M10\). Sin GPRS ni monitorización IP continua. |
| --- | --- |
| Bandas | Módulo GSM: Quectel M10 \(bandas de red específicas no detalladas en el resumen del producto\). |
| Alimentación y Batería | 2 × CR123A de 3.0 V de litio \(capacidad total indicada 1500 mAh\). Sin entrada de energía externa ni opción de batería externa. |
| Interfaces | Control y configuración basados en SMS. Sin I/O externo, sin entrada de ignición y sin salidas de inmovilizador/relé. |
| GNSS | GPS \(Quectel L10\) con una antena GPS de 25 × 25 × 4 mm. No admite AGPS. |
| Bluetooth | No se reporta soporte de Bluetooth o sensores BLE. |
| Gestión remota | Configuración y comandos vía SMS. No se reportan actualizaciones de firmware vía GPRS ni FOTA. |
| Formato | Carcasa compacta con tornillo, 70 × 50 × 21 mm, adecuada para colocación encubierta en vehículos o activos. |
| Sensores y características adicionales | Detección de temperatura, monitoreo de descarga de batería, reloj en tiempo real, numeración secuencial de SMS, monitoreo de saldo SIM y protección por PIN. |

## Casos de uso

- Rastreo encubierto de vehículos y motocicletas para anti-robo — colocación discreta y larga vida de la batería para operaciones de recuperación.
- Monitoreo y recuperación de embarcaciones o remolques donde la alimentación externa no es práctica y se requiere operación autónoma prolongada.
- Rastreo de envíos de alto valor y contenedores de carga durante almacenamiento o transporte, donde se busca una detección mínima.
- Rastreo a largo plazo de personas o mascotas para monitoreo temporal \(niños, adultos mayores, mascotas\) donde sean suficientes verificaciones periódicas de ubicación.

## Por qué elegir este rastreador con Plaspy

El AvtoFon E-Mayak 3.1 es una elección pragmática cuando se necesita un rastreador GPS compatible con Plaspy que priorice la duración de la batería, la discreción y flujos de trabajo simples basados en SMS. Su fortaleza es la operación autónoma y de baja detección, y su integración directa en flujos de trabajo de Plaspy donde las actualizaciones de ubicación bajo demanda y la telemetría por SMS son aceptables. Para propietarios de activos y gestores centrados en la recuperación ante robo y en el monitoreo prolongado sin intervención, el E-Mayak 3.1 ofrece reportes de posición confiables sin tarifas de suscripción ni costos de datos continuos.

Es importante adaptar las capacidades a las necesidades: el E-Mayak 3.1 no ofrece telemetría GPRS continua, monitoreo de audio, AGPS, acelerómetro incorporado, entrada de ignición, inmovilizador remoto, monitoreo de combustible o sensores Bluetooth. Si su gestión de flotas o caso de telemática requiere rastreo continuo en tiempo real, control de ignición/inmovilización, telemetría de combustible o integración de sensores BLE, considere esos requisitos antes de elegir este dispositivo centrado en SMS. Para escenarios de bajo mantenimiento y alta autonomía — recuperación encubierta, telemetría periódica y alertas por SMS — el AvtoFon E-Mayak 3.1 se integra de manera clara con flujos de trabajo de Plaspy y ofrece una opción de rastreo de bajo costo y larga vida.

