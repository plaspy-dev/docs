---
slug: /thingsys/ts_g17w
id: ts_g17w
sidebar_label: TS-G17W
sidebar_class_name: menu_item_tracker
---
# ThingSys - TS-G17W

![TS-G17W](./tracker.jpg)

El TS-G17W es un rastreador GPS para vehículos compacto, a prueba de agua IP67, diseñado para un seguimiento confiable en tiempo real en entornos exigentes. Pensado para despliegue mundial con 4G LTE‑FDD y respaldo 2G GSM \(dependiendo de la banda en el país\), el TS-G17W ofrece conectividad estable para la gestión de flotas, protección contra el robo y telemetría remota. Su pequeño factor de forma y su carcasa robusta lo hacen ideal para instalación discreta en automóviles, camiones, autobuses y otros activos donde la durabilidad y la protección contra el clima son esenciales.

El TS-G17W es compatible con Plaspy y se integra sin problemas en flujos de trabajo de monitoreo basados en Plaspy para seguimiento en vivo, alertas y comandos remotos. Con un chipset GNSS de alta sensibilidad 7670SA \(el chipset puede variar según la banda\), una precisión típica de posicionamiento de aproximadamente 5 metros y un excelente rendimiento en señales débiles, el dispositivo admite informes de ubicación precisos, tiempos de adquisición rápida \(TTFF\) y reporte continuo durante breves interrupciones de la energía gracias a una batería de respaldo Li‑ion de 3.7 V integrada.

## Puntos Clave

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real sin fisuras e integración con la gestión de flotas.
- 4G LTE‑FDD con respaldo 2G GSM \(la compatibilidad de bandas depende de la región\) para conectividad mundial.
- GNSS de alta sensibilidad \(7670SA, según la banda\) con precisión de ~5 m y sensibilidad de -159 dBm.
- E/S orientadas al vehículo: detección de encendido ACC y relé externo opcional para corte remoto \(control tipo inmovilizador\).
- Clasificación IP67 a prueba de agua y amplia tolerancia de voltaje \(9–80 V\): diseñada para entornos exigentes y diversos sistemas eléctricos de vehículos.
- Bajo consumo de energía y TTFF rápido para tiempos de adquisición breves: arranque frío 35–80 s, arranque tibio ~35 s, arranque caliente ~1 s.
- Varios tipos de alertas \(exceso de velocidad, vibración, reglas configurables\) además de sondeo por SMS y modos de traza GPRS para telemetría flexible.

## Cómo Funciona con Plaspy

Cuando se combina con Plaspy, el TS-G17W se convierte en una fuente de datos llave en mano para ubicación en tiempo real, alarmas y telemetría básica del vehículo. Plaspy ingiere los informes GPRS o SMS del dispositivo y los presenta como puntos de ubicación en vivo, notificaciones de alertas y trayectos históricos. La integración es sencilla: el protocolo de servidor del rastreador y los modos de traza se alinean con los métodos de ingestión comunes de Plaspy, lo que facilita la incorporación rápida de vehículos a paneles, geocercas y reportes automatizados.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy vía GPRS \(o consultadas mediante SMS cuando la cobertura de datos es limitada\).
- Detección de encendido \(ACC\) y eventos de alarma \(exceso de velocidad, vibración\) reportados a Plaspy para reglas y alertas automatizadas.
- Soporte de telemetría adecuado para paneles de gestión de flotas y flujos de trabajo como la reproducción de rutas y datos básicos de sensores.
- Capacidad de inmovilizador remoto mediante un relé externo opcional \(comandos de corte enviados a través de Plaspy para recuperación ante robo\).
- Plaspy puede correlacionar los datos del TS-G17W con fuentes de sensores adicionales \(sistemas de monitoreo de combustible, sensores/beacons Bluetooth gestionados por la plataforma\) para proporcionar una visión unificada de la salud del vehículo y las condiciones de la carga.

## Resumen Técnico

| Conectividad | 4G LTE‑FDD con respaldo 2G GSM \(el soporte depende de la banda en el país\) |
| --- | --- |
| Bandas | Bandas: dependientes del país/operador — LTE‑FDD como principal con respaldo 2G cuando aplica |
| Alimentación y Batería | Entrada de voltaje 9–80 V; batería de respaldo Li‑ion de 3.7 V integrada para reportar durante breves pérdidas de energía |
| Interfaces | Detección de encendido ACC; soporte para relé externo opcional para habilitar corte remoto \(capacidad de inmovilizador remoto\) |
| GNSS | Chipset GPS 7670SA \(puede variar según la banda\); precisión típica ~5 m; sensibilidad hasta -159 dBm; TTFF: frío 35–80 s, tibio ~35 s, caliente ~1 s |
| Bluetooth | No se reporta Bluetooth integrado; la correlación a nivel de plataforma con sensores/beacons Bluetooth es compatible con Plaspy si se utiliza una pasarela externa |
| Gestión Remota | Modo de traza GPRS y sondeo por SMS soportados; comandos y alertas remotos compatibles con la gestión en el servidor \(FOTA no especificado\) |
| Factor de Forma y Durabilidad | Dimensiones compactas 90 × 33 × 15 mm; peso 67 g; IP67 a prueba de agua; operación -20°C a +70°C; almacenamiento -40°C a +85°C; humedad 5%–95% sin condensación |

## Casos de Uso

- Gestión de flotas: seguimiento en tiempo real de vehículos, monitorización de rutas y alertas de eventos de conductor desde los paneles de Plaspy.
- Antirrobo y recuperación de vehículos: corte remoto mediante relé opcional y notificaciones de alarma para una respuesta rápida.
- Monitoreo de autos de alquiler: estado de encendido, historial de ubicación e instalación a prueba de manipulación con protección impermeable.
- Logística y rastreo de activos: rastreador robusto y compacto para remolques, unidades refrigeradas o activos expuestos que requieren protección IP67 y amplia tolerancia de voltaje.
- Operaciones remotas donde podría ser necesario el sondeo por SMS: admite GPRS cuando está disponible y trazas/polling por SMS en zonas con cobertura limitada.

## Por Qué Elegir Este Rastreador con Plaspy

Elegir el TS-G17W para despliegues con Plaspy ofrece un equilibrio entre fiabilidad robusta y características centradas en el vehículo que importan para la gestión de flotas y casos de uso anti‑robo. Su conectividad 4G LTE con respaldo 2G, GNSS de alta sensibilidad y TTFF rápido aseguran un seguimiento en tiempo real consistente incluso en condiciones de señal desafiantes. La carcasa IP67 y la amplia entrada de voltaje lo hacen adecuado para flotas de vehículos diversas y activos expuestos, mientras la batería de respaldo integrada y el diseño de bajo consumo protegen la continuidad de los informes ante interrupciones breves de energía.

Para los usuarios de Plaspy, el TS-G17W proporciona ubicaciones y eventos de alarma confiables \(encendido, exceso de velocidad, vibración\) que alimentan directamente el motor de reglas de Plaspy, la geocerca y la generación de reportes. La opción de relé externo para corte remoto ofrece una respuesta al estilo inmovilizador para la mitigación de robos, y los modos de sondeo por SMS y traza GPRS ofrecen opciones de telemetría flexibles donde la cobertura varía. En conjunto, el TS-G17W y Plaspy ofrecen una solución práctica y escalable para operadores que necesitan seguimiento en tiempo real confiable, integración de telemetría y gestión de flotas sencilla sin sacrificar robustez ni facilidad de instalación.

