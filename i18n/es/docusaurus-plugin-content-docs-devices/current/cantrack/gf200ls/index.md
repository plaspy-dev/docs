---
slug: /cantrack/gf200ls
id: gf200ls
sidebar_label: GF200LS
sidebar_class_name: menu_item_tracker
---
# CanTrack - GF200LS

![GF200LS](./tracker.png)

# GF200LS — Rastreador GPS de activos desechable con 3 años de autonomía

El GF200LS es un rastreador GPS de activos magnético de larga duración compatible con Plaspy, diseñado para despliegues de bajo mantenimiento y a largo plazo. Pensado para vehículos de servicio pesado, contenedores de carga y unidades en préstamo o arrendadas, el GF200LS equilibra una duración de batería excepcional con modos de reporte flexibles para soportar escenarios de seguimiento tanto periódicos como en tiempo real en las plataformas web y móviles de Plaspy.

El dispositivo utiliza tres baterías CR123 y un diseño de bajo consumo eficiente para ofrecer hasta tres años de operación en modo de standby cuando está configurado para una posición por día. Con clasificación IP65 a prueba de agua, un soporte magnético fuerte y un sensor de luz anti-tamper, el GF200LS está optimizado para la gestión de flotas, monitoreo anti-robo, asistencia en recuperación de vehículos robados y otras necesidades de gestión de activos a largo plazo, donde la telemetría de bajo contacto y la reportación de ubicación confiable son esenciales.

## Aspectos clave

- Autonomía ultralarga — hasta tres años en una sola ubicación por día para un seguimiento de activos GPS de bajo mantenimiento.
- Compatible con Plaspy para un seguimiento en tiempo real sin interrupciones y generación de informes históricos en plataformas web y móviles.
- Múltiples modos de funcionamiento \(tiempo real, intervalo, reloj\) permiten equilibrar la frecuencia de informes y la duración de la batería.
- Carcasa ABS a prueba de agua IP65 con imán N54 fuerte y tapa desmontable para una instalación sencilla en activos metálicos.
- GNSS rápido y sensible \(SIMCom A767 + AT6558R\) para TTFF rápido y precisión inferior a 5 m en condiciones típicas.
- Soporte celular multibanda \(LTE-FDD, LTE-TDD y 2G GSM\) para conectividad en áreas amplias e informes GPRS/TCP/IP.
- Alertas de manipulación con sensor de luz para detectar retirada no autorizada y apoyar flujos de trabajo anti-robo.

## Cómo funciona con Plaspy

Como rastreador GPS compatible con Plaspy, el GF200LS envía datos de posición y de eventos a Plaspy mediante su enlace celular \(GPRS/TCP sobre LTE/2G\) o a través de la IP/puerto del servidor configurados. Plaspy ingiere los informes de ubicación y alertas del dispositivo, lo que permite a los responsables de flotas y a los propietarios de activos ver posiciones en tiempo real, revisar rutas históricas y recibir notificaciones de manipulación o estado a través de los paneles de Plaspy y de sus apps móviles.

- Seguimiento en tiempo real: al estar en modo tiempo real, el GF200LS puede ofrecer actualizaciones continuas de ubicación \(aprox. 24 horas de batería en este modo\) para monitorización activa a corto plazo.
- Telemetría periódica: modos intervalo y reloj \(p. ej., una posición por día\) permiten telemetría a largo plazo con una vida de batería de varios años, ideal para seguimiento de contenedores y vehículos en préstamo.
- Alertas de manipulación y retirada: los informes de anti-tamper con sensor de luz se envían como eventos para activar notificaciones inmediatas en Plaspy y flujos de escalamiento.
- Configuración y control: el dispositivo admite configuración de APN e IP/puerto del servidor, además de comandos SMS para cambiar de modo remoto y verificar estado; Plaspy puede guiar la configuración para asegurar un reporte consistente.
- Compatibilidad con telemetría complementaria: Plaspy puede combinar la ubicación y los eventos del GF200LS con otros inputs compatibles con Plaspy \(monitoreo de combustible, estado de ignición o inmovilizador, o sensores Bluetooth externos\) mediante dispositivos o integraciones adicionales compatibles con Plaspy.

## Visión general técnica

| Conectividad | LTE-FDD, LTE-TDD y 2G GSM con GPRS Clase 12 TCP/IP |
| --- | --- |
| Bandas | LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B28/B66; LTE-TDD: B34/B38/B39/B40/B41; 2G GSM: 850/900/1800/1900 MHz |
| Alimentación y Batería | 3 × CR123 baterías \(4500 mAh en total, ~3V equivalentes\). En standby típico: 1 ubicación/día ≈ hasta 3 años; modo en tiempo real ≈ 24 horas. Corriente de funcionamiento 40–80 mA/h \(entrada de 3V\); corriente en standby 60–100 μA/h. |
| Interfaces | Cobertura trasera magnética removible; alarma de manipulación por sensor de luz \(anti-tamper\); comandos de configuración por SMS \(contraseña por defecto 123456\) para ajustes de modo/APN/servidor y verificación de estado. |
| GNSS | GPS SIMCom A767 + AT6558R; GPS L1 1575.42 MHz, 66 canales; arranque en caliente ≤3 s, arranque en frío ≤45 s; sensibilidad de seguimiento -165 dBm; adquisición -148 dBm; precisión típica \<5 m. |
| Antena | Antena LTE integrada y antena GPS cerámica |
| Memoria | 32 + 32 Mb |
| Rango de operación | Temperatura de operación: -20 °C a +60 °C |
| Carcasa y Formato | Carcasa de ABS ignífuga, clasificación IP65 a prueba de agua, tamaño 64 × 55 × 30 mm, peso 0.15 kg, imán fuerte de nivel N54 para montaje externo |
| Bluetooth | No listado / no se reporta BLE |
| Gestión remota | Comandos de configuración por SMS para cambio de modo, zona horaria, APN, IP/puerto administrativo, reinicio, verificación de estado y restablecimiento de fábrica; IP/puerto del servidor configurable para informes TCP/IP. |

## Casos de uso

- Monitoreo de activos en préstamos financieros — asegure la ubicación de la garantía con informes GPS de bajo mantenimiento y larga duración.
- Seguimiento de contenedores y cargas — actualizaciones periódicas de ubicación y alertas de manipulación para largos periodos de tránsito y almacenamiento.
- Asistencia en recuperación de vehículos robados — proporcionar telemetría de ubicación discreta y alertas de retirada para apoyar a los equipos de recuperación.
- Gestión de vehículos en préstamo o arrendados — rastrear activos dispersos y de uso intermitente sin necesidad de mantenimiento frecuente.
- Inventario de activos a largo plazo y gestión de flotas — mantener visibilidad de ubicación para equipos que se mueven poco o de uso estacional.

## Por qué elegir este rastreador con Plaspy

Emparejar el GF200LS con Plaspy ofrece una solución práctica y rentable para las organizaciones que requieren datos de ubicación confiables sin necesidad de mantenimiento frecuente en sitio. El GF200LS destaca por su capacidad de standby de tres años en modos de informes reducidos, su construcción robusta IP65 y una instalación magnética simple, lo que lo hace adecuado para la gestión de flotas y despliegues anti-robo donde la telemetría de bajo contacto es esencial.

En Plaspy, los datos del GF200LS se vuelven operativos: seguimiento en tiempo real cuando sea necesario, informes programados por intervalos para monitoreo a largo plazo y notificaciones inmediatas de manipulación para activar alertas o flujos de recuperación. Si bien el GF200LS se centra en la telemetría de ubicación y eventos, Plaspy puede enriquecer esos registros combinándolos con otras fuentes de telemetría \(monitoreo de combustible, estado de ignición o inmovilizador, o sensores Bluetooth externos\) mediante dispositivos o integraciones adicionales compatibles con Plaspy. Juntos, proporcionan un seguimiento e informes escalables y confiables que reducen la carga operativa y mejoran la seguridad de los activos.

