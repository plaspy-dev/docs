---
slug: /autoseeker/at_18/protocol
id: at_18-protocol
sidebar_label: Protocol
title: Autoseeker - AT-18 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Autoseeker AT-18 para compatibilidad con Plaspy en rastreo en tiempo real
keywords:
  - Protocolo Autoseeker AT-18
  - Autoseeker AT-18 GPS
  - Compatibilidad AT-18 Plaspy
  - Protocolo de rastreo Autoseeker
  - Protocolo rastreador GPS Plaspy
  - Rastreo vehicular Autoseeker
  - Comunicación AT-18
  - Protocolo para gestión de flotas
  - Protocolo GPS en tiempo real
  - Integración Autoseeker
---

# Autoseeker - Protocolo AT-18

Esta página ofrece un panorama público del contexto de comunicación para usar el rastreador Autoseeker AT-18 con Plaspy. Resume cómo el dispositivo reporta ubicación y telemetría básica a Plaspy y qué espera la plataforma de los rastreadores compatibles, basándose en la descripción del dispositivo AT-18 y en los ajustes de conexión de Plaspy.

Plaspy utiliza configuraciones de conexión compartidas para todos los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo informa al endpoint de Plaspy. El tiempo exacto de envío de mensajes, la telemetría disponible y el comportamiento de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso este texto se centra en detalles públicos y no sensibles útiles para la integración y solución de problemas.

## Resumen del protocolo

El AT-18 comunica posición e información de estado a través de datos celulares con SMS como respaldo. A alto nivel, el protocolo del dispositivo define cómo el rastreador se identifica, cómo reporta posiciones GPS y señales de estado como ACC o batería baja, y cómo dispara condiciones de alarma que Plaspy puede mostrar a los usuarios.

- Permite reportes periódicos de posición y actualizaciones por eventos hacia Plaspy para visibilidad en tiempo real
- Transmite telemetría básica como estado de ignición, nivel de batería y banderas de alarma junto con la ubicación
- Incluye mecanismos para notificar a Plaspy sobre violaciones de geocerca, exceso de velocidad y otras alarmas configuradas
- Soporta reporte por SMS como fallback para alertas críticas cuando no hay datos de paquete
- Permite a Plaspy mapear los reportes entrantes a una identidad de dispositivo y almacenar historial para informes y análisis

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y realiza detección automática de protocolo, por lo que la mayoría de los dispositivos funcionarán sin seleccionar manualmente el protocolo en la plataforma. Si el AT-18 está configurado para reportar a Plaspy, la plataforma asociará los reportes entrantes con un perfil de dispositivo compatible y procesará los datos para mapas, alertas e historial.

- Plaspy usa un endpoint y puerto servidor comunes para simplificar la configuración de los dispositivos
- El equipo debe estar configurado para reportar a d.plaspy.com o a la IP del servidor Plaspy para alcanzar la plataforma
- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos soportados cuando llegan los datos
- Los usuarios normalmente no necesitan seleccionar un protocolo dentro de Plaspy si el rastreador apunta correctamente al endpoint de Plaspy
- Si un dispositivo no se registra, lo habitual es revisar la configuración de reporte del equipo y las versiones de firmware como siguiente paso

## Transporte y contexto de conexión

El AT-18 se usa típicamente con reporte GPRS TCP y puede recurrir al SMS como canal de respaldo. Al integrar con Plaspy, los detalles relevantes de transporte y endpoint son consistentes entre los rastreadores soportados, por lo que la instalación resulta sencilla y repetible.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138
- Plaspy acepta tanto reportes UDP como TCP en el puerto 8888 según el soporte y configuración del dispositivo
- El equipo puede configurarse usando UDP o TCP en el puerto 8888 para alcanzar Plaspy
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica despliegues y provisión masiva
- Use el transporte soportado por el firmware del equipo y por el entorno del operador móvil para obtener la mejor fiabilidad

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de los mensajes, los campos soportados y la telemetría opcional; confirme el comportamiento contra el firmware instalado
- Revisiones de hardware o variantes regionales pueden exponer entradas/IO o cableado de alarmas distintos; verifique el cableado físico para ACC y entradas de alarma
- La selección de transporte entre TCP y UDP puede afectar la semántica de entrega y la fiabilidad del reporte en algunas redes
- El comportamiento del fallback por SMS depende del fabricante y puede variar en los campos disponibles respecto al reporte por GPRS
- Valide siempre la identidad del dispositivo y el reporte de latidos tras la instalación inicial para confirmar que Plaspy recibe las actualizaciones esperadas
- Consulte la documentación oficial del fabricante para confirmar comandos o ajustes específicos del modelo

## Por qué es importante entender el protocolo

Conocer cómo se comunica el AT-18 ayuda a asegurar una configuración fluida y un funcionamiento confiable a largo plazo con Plaspy. Entender el canal de reporte, la telemetría esperada y el comportamiento de alarmas reduce el tiempo hasta obtener valor y simplifica la resolución de problemas cuando los dispositivos no aparecen en la plataforma como se espera.

- Ayuda a confirmar la configuración correcta del dispositivo y los ajustes de endpoint para que los reportes lleguen a Plaspy
- Acelera la resolución cuando faltan actualizaciones de posición, alertas o telemetría
- Apoya la elección de transporte para fiabilidad según condiciones específicas de la red móvil
- Informa sobre las limitaciones del fallback por SMS frente al reporte basado en paquetes
- Facilita la coordinación de actualizaciones de firmware y reemplazos de hardware manteniendo la continuidad del reporte

## Por qué usar Plaspy con este protocolo

Combinar el Autoseeker AT-18 con Plaspy ofrece a las organizaciones una forma directa de capturar posiciones GPS en tiempo real y telemetría esencial desde rastreadores compactos y discretos. La plataforma consolida los flujos de ubicación, muestra alarmas como violaciones de geocerca o exceso de velocidad y conserva registros históricos para informes y revisiones operativas. Para gestores de flotas y activos, la combinación de hardware AT-18 y software Plaspy apoya la protección contra robo, supervisión de rutas y monitoreo básico de uso.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. Please verify device specific protocol support and the latest firmware and implementation details on the manufacturer website https://autoseekergps.com/ since protocol support and firmware behavior can change over time.
