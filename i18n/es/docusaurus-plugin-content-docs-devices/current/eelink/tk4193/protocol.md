---
slug: /eelink/tk4193/protocol
id: tk4193-protocol
sidebar_label: Protocol
title: EElink - TK419‑3 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo para usar el rastreador EElink TK419‑3 con Plaspy y guía de conexión
keywords:
  - protocolo EElink TK419‑3
  - rastreador GPS EElink TK419‑3
  - compatibilidad TK419‑3 Plaspy
  - protocolo rastreador GPS Plaspy
  - protocolo de rastreo vehicular EElink
  - protocolo de comunicación TK419‑3
  - protocolo telemetría GPS EElink
  - gestión de flotas EElink Plaspy
  - guía integración TK419‑3
  - protocolo de dispositivo Plaspy
---

# EElink - Protocolo TK419‑3

Esta página describe, en términos generales y no sensibles, el contexto del protocolo público para el uso del EElink TK419‑3 con Plaspy. Explica cómo el rastreador se comunica con la plataforma Plaspy de forma que gerentes de flota, integradores y técnicos puedan entender la conectividad, el comportamiento de reporte y el papel del protocolo en una integración exitosa.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en conceptos generales de comunicación y contexto práctico de configuración más que en detalles internos del firmware.

## Visión general del protocolo

El protocolo implementado por el TK419‑3 regula cómo el dispositivo envía ubicaciones GNSS, estados de entradas/salidas y eventos de alarma a un endpoint en la nube para que Plaspy pueda ingerir y normalizar esos mensajes en actualizaciones de mapa, alertas y telemetría. Cuando el firmware lo permite, el protocolo también facilita la configuración remota y la respuesta a comandos.

- Transporta actualizaciones de ubicación y telemetría con marca temporal desde el rastreador hacia la plataforma en la nube para mapeo en tiempo real e historial.
- Transmite estados digitales y analógicos de E/S como encendido ACC, activaciones SOS y entradas de sensores que Plaspy presenta como eventos.
- Envía notificaciones de alarmas y eventos como exceso de velocidad, entrada/salida de geocercas y alertas por impacto, permitiendo que Plaspy desencadene notificaciones y flujos de trabajo.
- Soporta actualizaciones remotas de parámetros y canales de comando cuando el firmware permite que Plaspy ajuste intervalos de reporte o active relés.
- Funciona como capa de identificación y sesión para que Plaspy asocie los mensajes entrantes con el dispositivo y el registro de vehículo correctos.

## Detección del protocolo en Plaspy

Plaspy recibe tráfico de dispositivos en un único endpoint y puerto compartido y aplica detección automática para identificar el protocolo del rastreador. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en el endpoint público 54.85.159.138.
- La plataforma escucha en el puerto 8888 para reportes y comandos de los dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Plaspy usa el puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración y provisión de equipos.
- Cuando el TK419‑3 apunta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y enrutará los mensajes al pipeline de procesamiento correspondiente.

## Transporte y contexto de conexión

El transporte y direccionamiento son la primera capa para poner un TK419‑3 en comunicación con Plaspy. El rastreador soporta opciones estándar de enlace celular y puede configurarse para reportar a Plaspy por nombre de dominio o dirección IP. La selección del tipo de conexión puede afectar la latencia, las garantías de entrega y la capacidad de respuesta a comandos según las condiciones de red y el soporte del firmware.

- El TK419‑3 puede configurarse para reportar a d.plaspy.com o a 54.85.159.138.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 dependiendo de la configuración del equipo y las capacidades del firmware.
- Todos los dispositivos que usa Plaspy emplean el mismo puerto, lo que reduce la complejidad de configuración en flotas mixtas.
- Usar el nombre de dominio d.plaspy.com permite que DNS gestione cambios de enrutamiento en el backend sin necesidad de actualizar la configuración de los dispositivos.
- Asegúrese de que el APN y las credenciales celulares estén correctamente configuradas en el dispositivo para que pueda establecer una sesión de datos hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar las funciones soportadas y los formatos de campos; dos unidades TK419‑3 con firmware distinto pueden comportarse de manera diferente.
- Las revisiones de hardware y el cableado de accesorios opcionales como sensores externos o relés pueden influir en qué campos de telemetría están presentes.
- La elección de transporte entre UDP y TCP puede estar limitada por el operador móvil o el firmware; verifique que el dispositivo soporte el modo de transporte deseado.
- Plaspy detecta automáticamente el protocolo entrante, pero la detección requiere una configuración correcta de la dirección y del puerto del dispositivo.
- Las aplicaciones de configuración del fabricante o los comandos SMS a veces establecen objetivos de reporte; confirme que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Siempre valide la compatibilidad para funciones avanzadas como control de relé o telemetría de accesorios consultando la documentación oficial de EElink cuando el comportamiento exacto sea crítico.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del TK419‑3 reduce los tiempos de integración, mejora la eficiencia en la resolución de problemas y asegura un funcionamiento confiable en despliegues de flota en producción. Saber qué reportará el rastreador y cómo se conecta a Plaspy ayuda a evitar configuraciones erróneas y acelera la resolución de incidentes.

- Ayuda a confirmar que las posiciones GNSS, el estado ACC y los eventos de alarma serán capturados por Plaspy según lo esperado.
- Facilita el diagnóstico de problemas de conectividad verificando dominio, IP, transporte y puerto antes de profundizar en la investigación.
- Aclara qué comandos remotos y cambios de configuración son posibles según el firmware y la implementación del fabricante.
- Apoya la planificación de redundancia y disponibilidad al entender si UDP o TCP se ajustan mejor al entorno de red.
- Mejora la confiabilidad a largo plazo orientando decisiones sobre actualizaciones de firmware y comprobaciones de compatibilidad antes de un despliegue masivo.

## Por qué usar Plaspy con este protocolo

Combinar las capacidades del hardware TK419‑3 con la detección automática de protocolos y el modelo de conexión compartida de Plaspy ofrece a las organizaciones una vía sencilla hacia el monitoreo en tiempo real, alertas de eventos y configuración remota. El soporte multiconstelación GNSS del rastreador, su amplio rango de voltaje, las entradas/salidas ACC y relé, y la batería de emergencia se integran bien con la ingestión y normalización de Plaspy para entregar mapas, alertas y telemetría útiles para operaciones de flota.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos EElink visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo y deben verificarse en el sitio oficial de EElink https://www.eelink.com.cn/ para obtener la información más actualizada sobre el dispositivo.
