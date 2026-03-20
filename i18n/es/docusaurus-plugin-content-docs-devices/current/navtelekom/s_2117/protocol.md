---
slug: /navtelekom/s_2117/protocol
id: s_2117-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2117 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo S-2117 y ajustes de conexión compartidos para integración con Plaspy
keywords:
  - Protocolo Navtelekom СИГНАЛ S-2117
  - Protocolo GPS Navtelekom S-2117
  - Protocolo S-2117 Plaspy
  - Rastreador GPS S-2117
  - Compatibilidad rastreadores Navtelekom
  - Soporte de dispositivos Plaspy
  - Protocolo para rastreadores de vehículos
  - Telemetría sensores de combustible
  - iButton temperatura 1-Wire
  - Protocolo seguimiento de flotas
---

# Navtelekom - СИГНАЛ S-2117 Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador Navtelekom СИГНАЛ S-2117 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, los ajustes de conexión que deberá configurar para apuntar el equipo a Plaspy y consideraciones prácticas de compatibilidad para despliegues de flota. No se incluyen aquí detalles sensibles o propietarios del protocolo ni implementaciones específicas de firmware.

El S-2117 es un rastreador vehicular con GLONASS, soporte para sensor de combustible por RS-485, interfaces 1-Wire para temperatura e identificación, monitoreo de alarmas y manipulación, comunicación de voz bidireccional y salidas de control remoto. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene revisar la documentación del proveedor para detalles específicos de firmware.

## Resumen del protocolo

El protocolo del S-2117 regula cómo el dispositivo informa posición, telemetría y eventos para que Plaspy pueda recibir y presentar esa información. Esta sección describe el papel del protocolo en términos generales y cómo se mapea a los datos que Plaspy utiliza para monitoreo, alertas e informes.

- Permite el envío periódico y por eventos de la posición GNSS y movimiento a un servidor remoto para seguimiento en vivo y historial de rutas.
- Transporta telemetría como lecturas de sensores de combustible conectados por RS-485, sondas de temperatura 1-Wire y entradas digitales para alarmas o manipulación.
- Proporciona notificaciones de eventos como entradas de alarma, pulsaciones del botón de pánico, cambios de ignición y otras señales discretas que Plaspy presenta como alertas.
- Soporta comandos de control y actuadores desde la plataforma remota cuando el equipo y el firmware permiten comunicación bidireccional.
- Traduce identificadores de dispositivo y contexto de sesión para que Plaspy pueda asociar los reportes entrantes con activos concretos de la flota.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar datos de muchas marcas de rastreadores en un único endpoint compartido e identificar el protocolo de reporte de forma automática. Cuando un S-2117 correctamente configurado envía datos al endpoint de Plaspy, la plataforma asociará el tráfico entrante con un perfil soportado sin que normalmente sea necesaria una selección manual de protocolo.

- Los dispositivos deben configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y todos los equipos soportados usan este mismo puerto.
- El rastreador puede enviarse usando transporte UDP o TCP según la configuración del equipo y las capacidades del firmware.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a reportar al endpoint compartido, por lo que la selección manual suele ser innecesaria.
- Si un dispositivo no aparece en Plaspy después de configurarlo, verifique los ajustes de reporte del equipo y confirme que puede alcanzar el endpoint y el puerto de Plaspy.

## Contexto de transporte y conexión

Esta sección explica el contexto de conexión del S-2117 al integrarlo con Plaspy. Se enfoca en las opciones de transporte y direccionamiento que deberá configurar en el dispositivo, más que en los detalles internos del protocolo.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al servidor Plaspy usando el nombre de dominio d.plaspy.com o la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y el enrutamiento en el servidor.
- Asegúrese de que el plan de datos de la SIM del vehículo y el operador de red permitan el transporte elegido y que las conexiones salientes al endpoint de Plaspy estén permitidas.
- Verifique la configuración del APN y las herramientas de configuración del proveedor si el dispositivo no establece conexión con el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware del fabricante pueden cambiar la cadencia de los mensajes, campos opcionales o características soportadas entre versiones.
- Las revisiones de hardware o modelos descontinuados pueden presentar diferencias sutiles en interfaces disponibles o configuraciones predeterminadas.
- La elección entre UDP y TCP afecta las características de entrega y debe coincidir con lo que el firmware del dispositivo soporta y con los requisitos de su despliegue.
- Para sensores de combustible por RS-485 y periféricos 1-Wire confirme que el firmware del equipo exponga esos canales de telemetría en los reportes salientes.
- Modelos descontinuados como el S-2117 pueden seguir siendo compatibles con Plaspy, pero valide la build de firmware y las versiones de las herramientas de configuración que planea usar.
- Siempre contraste el comportamiento del dispositivo con la documentación oficial del fabricante para el firmware y la revisión exacta que tiene en campo.

## Por qué es importante entender el protocolo

Comprender en la práctica el protocolo de comunicación del rastreador ayuda a garantizar una incorporación confiable de los dispositivos, un mapeo preciso de la telemetría en Plaspy y una resolución más rápida de problemas cuando faltan eventos o datos.

- Acelera la configuración inicial al confirmar servidor, puerto y transporte correctos en el dispositivo.
- Mejora la resolución de problemas cuando la posición, combustible o temperatura no aparecen en Plaspy como se espera.
- Aclara qué canales de telemetría puede reportar el dispositivo para que configure sensores y entradas de forma adecuada.
- Ayuda a determinar si es necesario un cambio de configuración o una actualización de firmware para habilitar una función específica en Plaspy.
- Apoya decisiones operacionales como elegir UDP o TCP según la confiabilidad de la red y las necesidades de reporte.

## Por qué usar Plaspy con este protocolo

Usar el Navtelekom СИГНАЛ S-2117 con Plaspy ofrece a las organizaciones ubicación y telemetría avanzada en una sola plataforma. Plaspy ingiere posición GNSS, telemetría de combustible y temperatura, eventos de alarma y señales de control remoto para que los gestores de flota puedan visualizar rutas, configurar alertas y generar informes que contribuyan a mejorar la eficiencia y la seguridad.

Si desea obtener más información sobre Plaspy y cómo soporta dispositivos como el S-2117 visite https://www.plaspy.com. Para detalles específicos sobre el protocolo del dispositivo, notas de firmware y herramientas de configuración consulte al fabricante en https://www.navtelecom.ru/ puesto que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse frente a la documentación oficial del fabricante.
