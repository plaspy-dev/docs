---
slug: /neomatica/adm300/configuration
id: adm300-configuration
sidebar_label: Configuration
title: Neomatica - ADM300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Neomatica ADM300 y conectarlo a Plaspy con ajustes de servidor y flujo de instalación
keywords:
  - Configuración Neomatica ADM300
  - Instalación Neomatica ADM300
  - Integración ADM300 Plaspy
  - Configuración rastreador GPS ADM300
  - Configuración servidor ADM300
  - Configuración rastreador Plaspy
  - Configuración seguimiento flotas ADM300
  - Configuración plataforma GPS ADM300
  - Integración rastreador Neomatica
  - Configuración EGTS ADM300
---

# Neomatica - Configuración del ADM300

Esta página ofrece contexto público de configuración y orientación práctica para usar la terminal GPS/GLONASS Neomatica ADM300 con la plataforma de gestión de flotas Plaspy. Resume los ajustes de servidor que Plaspy requiere, explica el flujo típico para apuntar un ADM300 a Plaspy y destaca los prerrequisitos y comprobaciones operativas basadas en las capacidades GPRS y del protocolo abierto del ADM300.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en sus conexiones entrantes. Los pasos exactos en el lado del fabricante para el ADM300 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor; siempre verifique los procedimientos específicos del dispositivo en la documentación de Neomatica.

## Visión general de la configuración

Configurar un ADM300 para Plaspy implica dirigir el dispositivo a enviar paquetes GPRS al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda procesar ubicación, telemetría y eventos para monitoreo en tiempo real e informes históricos. El ADM300 soporta EGTS y un protocolo abierto, lo que lo hace compatible con Plaspy cuando el equipo está apuntado al servidor y transporte correctos.

- Apunte el ADM300 a Plaspy usando el dominio o la IP estática del servidor.  
- Configure el puerto de red del dispositivo al puerto compartido de Plaspy para que los datos lleguen al listener esperado.  
- Seleccione el método de transporte (UDP o TCP) si el dispositivo requiere una selección explícita.  
- Guarde y aplique los ajustes con el método de configuración oficial de Neomatica o la herramienta del proveedor.  
- Verifique que el dispositivo se registre y empiece a reportar a Plaspy para seguimiento en vivo y visibilidad de eventos.

## Ajustes de servidor de Plaspy

Use los siguientes ajustes públicos de servidor de Plaspy al configurar el ADM300:

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: device may be configured using UDP or TCP on port 8888  
- Plaspy notes: all devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol

## Requisitos habituales antes de la configuración

- Alimentación del dispositivo y cableado correcto o batería en buen estado para que el ADM300 arranque de forma fiable.  
- SIM activa con un plan de datos GPRS provisionado para uso de paquetes.  
- Acceso al método de configuración oficial de Neomatica, al software o a la herramienta del proveedor que permita cambiar servidor y ajustes de protocolo.  
- Conocimiento de los ajustes de servidor de Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) para introducirlos durante la configuración.  
- Un entorno de pruebas o consola de monitoreo para validar que el dispositivo está reportando a Plaspy después de los cambios.  
- Tarjeta microSD opcional instalada si desea registro extendido a bordo y subida por lotes de registros históricos.

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el ADM300 envía datos de ubicación, telemetría y eventos por GPRS al endpoint y puerto compartidos de Plaspy. Plaspy recibe y procesa el protocolo entrante (EGTS o el protocolo abierto del dispositivo), haciendo la unidad visible en la plataforma para mapas en tiempo real, alertas e historial.

- El ADM300 transmite paquetes de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888.  
- La selección de transporte puede ser UDP o TCP; el dispositivo puede requerir que este ajuste coincida con el tipo de conexión elegido.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita preseleccionar la detección de protocolo en la plataforma.  
- Los reportes de eventos, estados de entradas y eventos de movimiento basados en acelerómetro se reenvían a Plaspy para alertas y análisis.  
- Comandos de actualización remota de firmware y operaciones de gestión usan el mismo enlace GPRS una vez que el dispositivo está conectado.

## Flujo de configuración habitual

1. Acceda al método o software de configuración oficial de Neomatica recomendado para el ADM300 (herramienta del fabricante, utilidad del proveedor o interfaz de instalador autorizado).  
2. En los ajustes de servidor del dispositivo, ingrese el endpoint de Plaspy por dominio o IP: d.plaspy.com o 54.85.159.138.  
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).  
4. Si el ADM300 requiere una selección de transporte, elija UDP o TCP según su preferencia o la recomendación del instalador.  
5. Aplique o guarde la configuración en la herramienta de Neomatica y confirme que el dispositivo aceptó los nuevos ajustes.  
6. Reinicie el dispositivo si la herramienta o el firmware lo requiere para activar los nuevos parámetros de red.  
7. Valide que el ADM300 reporta a Plaspy observando los mensajes iniciales de posición/telemetría en sus herramientas de monitoreo o comprobando el estado de conectividad en Plaspy.

## Ejemplo de comandos de configuración

El ADM300 soporta configuración vía las utilidades oficiales de Neomatica y las herramientas del proveedor; los comandos o frases SMS exactas dependen del firmware y de la interfaz de configuración proporcionada por Neomatica o su distribuidor. Debido a la variabilidad por firmware y herramientas de proveedor, consulte el manual de configuración de Neomatica o la herramienta que esté usando para la sintaxis precisa de los comandos para establecer dominio/IP del servidor, puerto 8888 y selección de transporte (UDP o TCP). Al usar una herramienta, normalmente ingresará:

- Server domain or IP: d.plaspy.com or 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP

Si su método de configuración utiliza marcadores de posición para APN o credenciales, conserve marcadores como [apn], [apnu] o [apnp] y reemplácelos por los valores de su operador móvil cuando la herramienta del fabricante lo solicite.

## Notas de configuración

- Diferencias de firmware y herramientas: Las revisiones de firmware de Neomatica y las utilidades oficiales de configuración pueden cambiar la sintaxis de los comandos y las opciones; consulte siempre la documentación versionada de Neomatica.  
- Elección de transporte: TCP y UDP son compatibles con el endpoint de Plaspy; seleccione el transporte que coincida con las prácticas de su instalador y las condiciones de red. Plaspy aceptará cualquiera de los dos y detectará automáticamente el protocolo del dispositivo.  
- EGTS y protocolo abierto: El ADM300 soporta EGTS y una implementación de protocolo abierto; asegúrese de que el modo de protocolo del dispositivo coincida con lo que su herramienta de configuración está preparada para enviar a Plaspy.  
- Registro y microSD: Si requiere historial de rutas a largo plazo, confirme que la microSD está formateada y accesible para que el ADM300 pueda almacenar y subir registros largos cuando sea necesario.  
- Documentación del fabricante: Remítase a las guías oficiales de Neomatica para instrucciones específicas del dispositivo, notas de seguridad y procedimientos de actualización de firmware.

## Por qué usar Plaspy con esta configuración

Usar el ADM300 con Plaspy ofrece a los operadores de flota un camino directo hacia visibilidad en tiempo real, alertas basadas en eventos y reproducción histórica de rutas. La transferencia de paquetes por GPRS y la compatibilidad con EGTS/protocolo abierto del ADM300 permiten integrarlo rápidamente con el endpoint compartido de Plaspy, facilitando reportes consistentes en flotas mixtas y simplificando la gestión del ciclo de vida del dispositivo con soporte de firmware remoto.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para pasos de instalación específicos del dispositivo, detalles de firmware y los comandos de configuración más recientes para el ADM300, verifique la información vigente en el sitio del fabricante https://neomatica.com/.
