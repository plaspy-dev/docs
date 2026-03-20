---
slug: /sentar/l70/protocol
id: l70-protocol
sidebar_label: Protocol
title: Sentar - L70 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público del rastreador Sentar L70 y cómo comunica con la plataforma Plaspy
keywords:
  - Protocolo Sentar L70
  - Protocolo GPS Sentar L70
  - Compatibilidad Sentar L70 Plaspy
  - Protocolo de comunicación Sentar L70
  - Protocolo de rastreo Sentar L70
  - Protocolo rastreador GPS Sentar
  - Integración dispositivo Sentar L70
  - Compatibilidad dispositivos Plaspy
  - Rastreo de flotas Sentar L70
  - Rastreo vehicular Sentar L70
---

# Sentar - Protocolo L70

Esta página describe el contexto público del protocolo para usar el rastreador GPS Sentar L70 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué ajustes de conexión utiliza con Plaspy y qué considerar al integrar el rastreador para reporte de ubicación y monitoreo.

El Sentar L70 combina GPS, AGPS, LBS y posicionamiento por WiFi y utiliza un chipset MTK2503 para tareas de localización. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto y las opciones de reporte disponibles pueden variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que los detalles que siguen son intencionalmente de alto nivel y no sensibles.

## Resumen del protocolo

El protocolo de comunicación del L70 define cómo el dispositivo informa ubicación, estado y eventos a un servidor remoto y cómo la plataforma puede identificar e interpretar esos informes. Cuando se usa con Plaspy, el protocolo proporciona los datos necesarios para posicionamiento, marcas de tiempo y estado básico del equipo, mientras que Plaspy se encarga de interpretar y almacenar la información.

- Permite que el dispositivo envíe actualizaciones periódicas de ubicación e informes impulsados por eventos a la plataforma
- Permite que el rastreador se identifique para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto
- Transporta telemetría como posición, hora y estado básico que Plaspy convierte en datos de ubicación utilizables
- Admite tanto reportes en tiempo real como reportes de estado según la configuración del dispositivo y el firmware
- Funciona con Plaspy de modo que los mensajes entrantes del dispositivo son aceptados y procesados sin requerir la selección manual del protocolo

## Cómo detecta Plaspy el protocolo

Plaspy recibe los informes de dispositivos en un endpoint público compartido e identifica automáticamente el protocolo del rastreador, por lo que los usuarios por lo general no necesitan seleccionar un protocolo manualmente. La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el requisito habitual para una detección automática exitosa.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138 y el puerto establecido por la plataforma es 8888
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica el despliegue
- Cuando un L70 está configurado para reportar al endpoint de Plaspy, la plataforma detectará el protocolo automáticamente e ingerirá los datos
- La selección manual del protocolo dentro de Plaspy generalmente no es necesaria si el dispositivo apunta correctamente al endpoint de Plaspy

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento determinan cómo el L70 alcanza la plataforma Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el hardware, el operador de la SIM y la configuración del firmware. Para Plaspy, los detalles clave de conexión son consistentes entre tipos de dispositivos.

- Los dispositivos pueden usar transporte UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Los rastreadores pueden apuntar al endpoint de reporte de Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138
- Plaspy emplea el mismo puerto para todos los dispositivos, lo que hace predecible la configuración de firewalls y redes
- Confirme el APN del dispositivo, la configuración del operador de red y la selección del transporte al aprovisionar un L70 para asegurar conectividad
- Las condiciones de la red y las políticas del operador pueden influir en si UDP o TCP es más recomendable para reportes confiables

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el L70 reporta ciertos campos o qué modos de reporte están disponibles
- Las revisiones de hardware y las funciones opcionales pueden afectar los transportes soportados o los sensores incluidos en los informes
- Configuraciones del lado del fabricante o personalizaciones pueden modificar intervalos de reporte por defecto o disparadores de eventos
- Elija UDP o TCP según la confiabilidad de la red y las restricciones del operador para obtener mejores resultados
- Valide la compatibilidad y los ajustes recomendados contra la documentación oficial del fabricante antes de un despliegue a gran escala
- Asegúrese de que el APN de la SIM y la configuración de red coincidan con la configuración del dispositivo y los requisitos del operador

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del L70 y el comportamiento general de los reportes ayuda a integrar el dispositivo en Plaspy con mayor fluidez, facilita la resolución de problemas y mejora la confiabilidad a largo plazo de los datos de ubicación para uso operativo.

- Acelera la configuración inicial al confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Ayuda a identificar si la selección de transporte UDP o TCP es la causa de reportes intermitentes
- Orienta las decisiones de actualización de firmware cuando nuevas versiones modifican el reporte o el comportamiento de energía
- Facilita la interpretación del comportamiento del dispositivo durante cortes de red o cuando el equipo entra en modos de bajo consumo
- Reduce el ensayo y error al validar reportes del dispositivo y la telemetría esperada

## Por qué usar Plaspy con este protocolo

Usar el Sentar L70 con Plaspy ofrece un camino sencillo para centralizar datos de ubicación, alertas y monitoreo de flotas o activos. El posicionamiento multimodal del L70 ayuda a ofrecer información útil de ubicación en entornos variados, y la plataforma de Plaspy está diseñada para aceptar reportes de dispositivos en un único endpoint compartido para simplificar el despliegue.

Si desea obtener más información sobre cómo Plaspy maneja los rastreadores compatibles y revisar las capacidades de la plataforma visite https://www.plaspy.com. Para detalles específicos más actuales del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio web de Sentar http://www.sentarsmart.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
