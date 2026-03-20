---
slug: /aoya/a206/configuration
id: a206-configuration
sidebar_label: Configuration
title: AoYa - A206 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador GPS AoYa A206 para usar con Plaspy con los parámetros públicos del servidor y guía de configuración
keywords:
  - Configuración AoYa A206
  - Instalación AoYa A206
  - Integración A206 Plaspy
  - Configuración rastreador GPS AoYa
  - Configuración servidor A206
  - Configuración seguimiento AoYa A206
  - Configuración rastreador GPS Plaspy
  - Seguimiento vehicular A206
  - Seguimiento de flotas AoYa
  - Configuración plataforma A206
---

# AoYa - Configuración A206

Esta página describe el contexto público de configuración para usar el rastreador GPS AoYa A206 con la plataforma Plaspy. Resume los valores públicos del servidor y la guía general necesaria para apuntar un dispositivo A206 a Plaspy y que los datos de ubicación sean visibles en la plataforma. El A206 es un rastreador orientado a vehículos que soporta posicionamiento GPS y AGPS y se usa comúnmente en seguimiento vehicular y monitoreo de flotas.

Plaspy utiliza un endpoint de servidor consistente y detección automática de protocolo entre los dispositivos compatibles, aunque los pasos concretos en el lado del fabricante pueden variar. Los dispositivos AoYa como el A206 pueden ofrecer múltiples canales de configuración, como SMS o herramientas del proveedor, y el comportamiento puede depender de la versión de firmware, la revisión de hardware, el método de instalación y variantes regionales. Esta página se centra en los valores públicos del servidor para usar con Plaspy y en un flujo de trabajo general para aplicarlos.

## Resumen de la configuración

El objetivo de este proceso es preparar el A206 para que se comunique de forma fiable con la plataforma Plaspy y entregue información de ubicación y estado. Esto implica configurar el dispositivo para que reporte a Plaspy, confirmar los ajustes de transporte y validar que los mensajes llegan correctamente.

- Configurar el rastreador para que reporte al endpoint del servidor de Plaspy y así el dispositivo sea visible en la plataforma
- Elegir y confirmar el método de transporte que el rastreador utilizará para enviar datos a Plaspy
- Verificar la conectividad de red y la configuración del APN cuando sea necesario para que el dispositivo tenga un canal de datos funcional
- Validar que el rastreador está reportando y que Plaspy recibe y parsea los mensajes del dispositivo
- Conservar la documentación del fabricante a mano para cualquier paso específico del modelo o comportamientos dependientes del firmware

## Valores del servidor de Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy

Estos valores son los parámetros públicos del servidor de Plaspy que debe ingresar en el dispositivo o mediante la herramienta de configuración del fabricante. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que apuntar el A206 a este endpoint es el paso principal de configuración de red.

## Requisitos típicos antes de la configuración

- Un dispositivo A206 con batería cargada o con alimentación disponible para su configuración
- Una SIM con datos y un plan de datos móviles activo si el dispositivo usa celular para enviar reportes
- Acceso al método oficial de configuración de AoYa o a la herramienta del proveedor para la versión de su dispositivo
- Información básica sobre el APN del operador móvil si el dispositivo requiere configuración de APN
- Una cuenta de Plaspy o acceso de administrador a la plataforma Plaspy para confirmar la llegada del dispositivo y la visualización en el mapa
- Cobertura para permitir que el A206 obtenga posición por GPS o AGPS antes de probar el reporte de ubicación

## Cómo se conecta este rastreador a Plaspy

El A206 se configura para enviar sus mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunte a Plaspy y se establezca la conectividad de red, Plaspy recibirá el tráfico del dispositivo e intentará identificar el protocolo automáticamente.

- Los mensajes del dispositivo se dirigen a Plaspy usando el dominio o la IP y el puerto indicados arriba
- El rastreador emplea la opción de transporte seleccionada UDP o TCP para enviar paquetes a Plaspy
- Plaspy detecta automáticamente el protocolo del dispositivo y parsea los mensajes entrantes para mapas y eventos
- Una vez parseados, la ubicación y el estado se muestran en Plaspy para monitoreo e informes
- La validación en Plaspy confirma que la instancia específica del A206 está reportando correctamente

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software del A206 según la versión de su dispositivo
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138
3. Configure el puerto del servidor en 8888 como puerto de reporte del dispositivo
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según su preferencia o las restricciones de la red
5. Guarde o aplique la configuración usando la herramienta o el procedimiento del fabricante
6. Valide que el dispositivo comience a reportar y que aparezca en Plaspy con ubicación y estado correctos

Si el A206 soporta configuración por SMS o una herramienta complementaria para el firmware instalado, utilice ese canal oficial para realizar los cambios. No dependa de comandos no documentados ni atajos; siga las instrucciones del fabricante para su firmware y variante de modelo.

## Notas de configuración

- Las revisiones de firmware y las variantes de hardware pueden cambiar los pasos de configuración exactos o los comandos soportados, por lo que siempre debe consultar la documentación de AoYa para su unidad
- El A206 puede ofrecer configuración por SMS o una app del proveedor, pero utilice únicamente los métodos oficiales documentados para cambiar servidor y APN
- La elección entre TCP o UDP puede afectar las características de entrega en distintas redes; Plaspy acepta ambos y realiza detección automática de protocolo
- Plaspy usa el mismo puerto para todos los dispositivos, así que asegúrese de que el puerto 8888 esté configurado o sea accesible desde la red del dispositivo
- Valide la configuración comprobando la aparición del dispositivo y el parseo de mensajes en Plaspy en lugar de confiar únicamente en los mensajes de confirmación del equipo

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el AoYa A206 ofrece una forma sencilla de integrar los datos de ubicación de vehículos en una plataforma de monitoreo unificada. Apuntar el A206 a Plaspy permite a los equipos rastrear ubicaciones, revisar el estado del dispositivo y crear flujos operativos que dependan de parámetros de servidor consistentes y del parseo de la plataforma.

Para obtener más información sobre Plaspy y cómo gestiona las conexiones de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para instrucciones de configuración específicas y actualizadas, notas de firmware y detalles del fabricante consulte el sitio oficial de AoYa en http://www.aoyagps.com/ que provee la guía autorizada para la configuración y el comportamiento del firmware del A206.
