---
slug: /aplicom/a9_ipex/configuration
id: a9_ipex-configuration
sidebar_label: Configuration
title: Aplicom - A9 IPEX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador Aplicom A9 IPEX a Plaspy con ajustes de servidor compartido y buenas prácticas
keywords:
  - Configuración Aplicom A9 IPEX
  - Configuración A9 IPEX
  - Compatibilidad A9 IPEX Plaspy
  - Configuración rastreador GPS Aplicom
  - Configuración de dispositivo Plaspy
  - Configuración seguimiento de flotas
  - Guía instalación rastreador vehicular
  - Configuración servidor A9 IPEX
  - Guía de configuración Aplicom
  - Configuración plataforma seguimiento GPS
---

# Aplicom - Configuración del A9 IPEX

Esta página describe el contexto de configuración pública para usar el rastreador Aplicom A9 IPEX con Plaspy. Resume los ajustes de servidor compartidos y los pasos generales necesarios para apuntar el A9 IPEX a la plataforma Plaspy, de modo que el dispositivo pueda reportar ubicación y telemetría a su backend. El A9 IPEX es un rastreador robusto con protección IP67 que soporta posicionamiento GPS y GLONASS, asistencia A‑GPS, posicionamiento por Cell ID, un acelerómetro 3D, integración CAN y un puerto serial RS232 para datos auxiliares como lecturas de unidades de refrigeración. Este documento se centra en los aspectos de integración con la plataforma más que en listas exhaustivas de comandos del fabricante.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos exactos desde el lado del fabricante para el A9 IPEX pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del instalador, así que siga esta guía como flujo de trabajo general y verifique cualquier comando o menú específico en la documentación oficial de Aplicom o con las herramientas de instalación que utilice.

## Resumen de la configuración

Esta sección explica el propósito de la configuración y qué debe verificar antes de esperar que el A9 IPEX aparezca en Plaspy. El objetivo es configurar el dispositivo para que envíe sus reportes al endpoint y puerto público de Plaspy, de modo que la plataforma pueda identificar y decodificar el protocolo del dispositivo automáticamente.

- Apunte el endpoint de reportes del A9 IPEX al dominio o IP del servidor de Plaspy para que los datos salientes lleguen a la plataforma.
- Use el puerto compartido de Plaspy para que el tráfico del dispositivo sea aceptado y procesado con detección automática de protocolo.
- Seleccione el protocolo de transporte requerido por su dispositivo o la herramienta del instalador para que el rastreador establezca una conexión estable.
- Valide la conectividad y que el dispositivo sea visible en Plaspy después de aplicar los ajustes.
- Confirme que cualquier integración con CAN del vehículo o con datos RS232 siga funcionando tras la configuración de red.

## Ajustes del servidor Plaspy

- Use el dominio de servidor d.plaspy.com como host principal de reporte para los datos del dispositivo
- Alternativamente, puede usar la IP del servidor 54.85.159.138 si necesita un endpoint numérico
- Configure el puerto del dispositivo en 8888, que es el puerto compartido que usa Plaspy para todos los dispositivos
- El transporte es compatible con UDP o TCP según los requisitos del dispositivo y la preferencia del instalador
- Plaspy realiza detección automática del protocolo cuando un dispositivo se conecta al endpoint y puerto designados

## Requisitos típicos antes de la configuración

- Acceso físico al A9 IPEX o a la herramienta de configuración utilizada por el técnico para ajustar el dispositivo
- Alimentación al dispositivo y confirmación de que el rastreador ha iniciado y está operativo
- Acceso al método o software oficial de configuración de Aplicom para aplicar los ajustes de red y servidor
- Verificación de la versión de firmware del dispositivo y las notas de la versión relevantes para la conectividad con el backend
- Un plan para integrar datos CAN o RS232 si esas interfaces se usan en su instalación
- Conectividad de red desde el entorno de instalación que permita conexiones salientes al servidor Plaspy

## Cómo se conecta este rastreador a Plaspy

El A9 IPEX se configura para enviar su ubicación y los mensajes del dispositivo al endpoint y puerto del servidor Plaspy para que la plataforma pueda ingerir, decodificar y presentar la telemetría y los eventos de estado. Una vez configurado, Plaspy determinará automáticamente el protocolo del rastreador y comenzará a procesar los reportes.

- El dispositivo envía reportes periódicos o por evento a d.plaspy.com o a 54.85.159.138
- Todo el tráfico se dirige al puerto 8888 que Plaspy usa como puerto común de entrada para los dispositivos soportados
- El transporte se negocia o se selecciona como UDP o TCP según la configuración del rastreador
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los reportes con el tipo de dispositivo correspondiente
- Una conectividad exitosa permite que la ubicación, el movimiento y los datos integrados de CAN o RS232 aparezcan en la interfaz de Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Aplicom o al software usado para el A9 IPEX
2. Ingrese d.plaspy.com o, si es necesario, el endpoint numérico 54.85.159.138 como host de reporte
3. Configure el puerto de reporte del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos
4. Seleccione UDP o TCP si el dispositivo requiere selección explícita de transporte durante la configuración
5. Guarde o aplique la configuración en el dispositivo usando la herramienta del fabricante
6. Valide que el dispositivo reporte a Plaspy y que la plataforma muestre la unidad como activa

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los menús de configuración y las opciones disponibles, por lo que debe verificar los pasos con la documentación actual de Aplicom
- Las prácticas del instalador varían según el despliegue; algunos equipos configuran los dispositivos en taller antes de la instalación, otros los configuran in situ
- La selección entre TCP y UDP puede afectar el comportamiento de conexión y las políticas de reintento; elija el transporte que se ajuste a su despliegue y requisitos de confiabilidad
- Si integra datos CAN o RS232, confirme que esas interfaces sigan mapeadas correctamente tras cambiar los ajustes de reporte en red
- Consulte siempre los registros del dispositivo o la herramienta de configuración del fabricante para diagnósticos de conexión al validar reportes a Plaspy

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A9 IPEX con Plaspy ofrece una vía directa para incorporar telemetría de grado vehicular y resistente a una plataforma centralizada de gestión de flotas. El hardware del A9 IPEX está diseñado para entornos exigentes y soporta canales de integración con el vehículo que pueden enriquecer los datos de ubicación con entradas del bus CAN y sensores seriales, ayudando a los equipos operativos a monitorear activos, mejorar la utilización y responder a eventos con mayor rapidez.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y la telemetría, visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, notas de firmware y orientación de instalación más recientes para el Aplicom A9 IPEX, confirme los detalles en el sitio del fabricante https://www.aplicom.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
