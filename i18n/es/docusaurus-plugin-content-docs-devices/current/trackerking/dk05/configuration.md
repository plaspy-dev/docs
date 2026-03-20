---
slug: /trackerking/dk05/configuration
id: dk05-configuration
sidebar_label: Configuration
title: TrackerKing - DK05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el TrackerKing DK05 con Plaspy usando la configuración compartida del servidor Plaspy
keywords:
  - Configuración TrackerKing DK05
  - Configuración inicial TrackerKing DK05
  - TrackerKing DK05 Plaspy
  - Configuración GPS DK05
  - Configuración de servidor DK05 para Plaspy
  - Configuración rastreador GPS para mascotas
  - Configuración de rastreadores Plaspy
  - Integración TrackerKing DK05
  - Configuración collar DK05
  - Compatibilidad rastreador GPS Plaspy
---

# TrackerKing - Configuración del DK05

Esta página documenta el contexto público de configuración para usar el TrackerKing DK05 con la plataforma Plaspy. Se centra en los ajustes prácticos y el flujo de trabajo necesarios para orientar un DK05 hacia Plaspy y que el dispositivo entregue ubicación en tiempo real, alertas de movimiento y telemetría a su cuenta Plaspy. No sustituye los manuales del fabricante, pero proporciona la información específica del servidor Plaspy y los pasos recomendados para la integración.

Plaspy utiliza configuraciones de servidor compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste reporta a Plaspy. Los pasos exactos del fabricante pueden variar según la versión de firmware del DK05, la revisión del hardware, el tipo de instalación y las herramientas de configuración del vendedor. Use esta guía para preparar el DK05 para Plaspy y confirme siempre los pasos específicos del dispositivo con la documentación oficial de TrackerKing.

## Resumen de la configuración

Este proceso prepara al DK05 para comunicarse de manera fiable con Plaspy, valida la conectividad por redes celulares y asegura que el rastreador aparezca en el panel de Plaspy para seguimiento en vivo y generación de alertas.

- Configure el DK05 para que envíe su posición GPS y telemetría al endpoint del servidor Plaspy.
- Asegúrese de que el rastreador tenga conectividad celular y una fuente de alimentación adecuada durante la configuración y las pruebas.
- Elija y establezca el tipo de transporte correcto si el dispositivo requiere seleccionar UDP o TCP.
- Guarde y aplique los ajustes en la herramienta o app de configuración de TrackerKing y luego verifique que el dispositivo se registre en Plaspy.
- Valide la telemetría, las alertas de movimiento y el reporte de batería del DK05 en la interfaz de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para el reporte de dispositivos

## Requisitos típicos antes de la configuración

- Un DK05 encendido con carga de batería suficiente para la configuración y las pruebas iniciales.
- Una conexión celular activa adecuada para el hardware GSM 4G y 2G Cat 1 cuatribanda del DK05 y una SIM operativa si el dispositivo la requiere.
- Acceso al método oficial de configuración de TrackerKing, como la app del fabricante o el portal de configuración.
- Una cuenta Plaspy y acceso al panel de Plaspy para confirmar la aparición del dispositivo y la telemetría después de la configuración.
- Conocimiento de la versión de firmware del dispositivo y de cualquier paso específico del proveedor requerido por ese firmware.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el DK05 envía la posición GPS y la telemetría a través de la red celular al endpoint y puerto compartido de Plaspy. Plaspy recibe esos informes, identifica automáticamente el protocolo del rastreador y expone las actualizaciones de posición, las alertas y el historial en el panel de Plaspy y en las aplicaciones móviles.

- El DK05 reporta ubicación GPS y telemetría de movimiento a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El dispositivo puede configurarse para usar transporte UDP o TCP en el puerto 8888 según lo requiera la interfaz de configuración del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador y convierte los reportes del dispositivo en posiciones en el mapa y eventos en tiempo real.
- El reporte de eventos como alertas de movimiento, violaciones de geocerca y avisos de batería baja se reenvía a Plaspy para notificaciones y registro histórico.
- Tras la configuración inicial, la supervisión operativa y la reproducción del historial están disponibles desde el panel de Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de TrackerKing para el DK05, como la app del fabricante o el portal de configuración.
2. En los ajustes de red o servidor del dispositivo, ingrese el servidor Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto de reporte del dispositivo en 8888 según lo requiere Plaspy.
4. Si la configuración del DK05 solicita selección de transporte, elija UDP o TCP en el puerto 8888 según su preferencia o las condiciones de red.
5. Aplique o guarde los cambios de configuración en la herramienta o app de TrackerKing.
6. Reinicie el DK05 si el fabricante recomienda un reinicio para que los nuevos ajustes entren en vigor.
7. Valide que el DK05 reporta a Plaspy verificando el estado del dispositivo y las posiciones recientes en el panel de Plaspy.

## Ejemplos de comandos de configuración

El contenido de configuración del modelo DK05 aquí provisto no incluye comandos públicos por consola o SMS. Los métodos de configuración del fabricante varían según firmware y conjunto de herramientas, y TrackerKing normalmente provee una app complementaria o portal web para la configuración del dispositivo. Use la app TrackerKing o la herramienta oficial de configuración para ingresar los ajustes del servidor Plaspy indicados arriba. Si dispone de cadenas de comandos específicas para su dispositivo proporcionadas por TrackerKing, aplíquelas siguiendo la documentación del proveedor y luego confirme la conectividad a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas de configuración

- Las diferencias de firmware pueden afectar dónde y cómo se ingresan los ajustes del servidor; verifique siempre el procedimiento correcto para la revisión de firmware de su DK05.
- Elija UDP o TCP según la confiabilidad de la red y sus propias pruebas; ambos transportes son soportados por Plaspy en el puerto 8888 y Plaspy detectará automáticamente el protocolo.
- Asegúrese de que la SIM y el servicio celular estén activos y que haya datos disponibles para que el DK05 alcance Plaspy a través de la red celular.
- Pruebe el dispositivo en exteriores donde la recepción GNSS sea buena para confirmar el reporte de posiciones precisas en Plaspy.
- Mantenga la app complementaria de TrackerKing o la herramienta de configuración y el firmware del DK05 actualizados para lograr la integración más confiable.

## Por qué usar Plaspy con esta configuración

Usar el DK05 con Plaspy brinda a los dueños de mascotas visibilidad centralizada de la ubicación en tiempo real, alertas de movimiento y rutas históricas. El hardware DK05 está optimizado para uso en collar y, al apuntarlo al endpoint y puerto compartido de Plaspy, suministra la telemetría que Plaspy necesita para ofrecer alertas, monitoreo de geocercas y notificaciones de batería desde una única plataforma de gestión.

Para saber más sobre Plaspy y cómo puede centralizar el seguimiento de dispositivos DK05 visite https://www.plaspy.com. Para los últimos pasos específicos de configuración, notas de firmware y la guía del fabricante para el DK05, consulte la documentación de TrackerKing en https://trackerking.cn/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, así que confirme siempre las instrucciones vigentes en el sitio de TrackerKing.
