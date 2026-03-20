---
slug: /trackerking/dk19/configuration
id: dk19-configuration
sidebar_label: Configuration
title: TrackerKing - DK19 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TrackerKing DK19 que muestra compatibilidad con Plaspy y ajustes de servidor necesarios para la integración
keywords:
  - TrackerKing DK19
  - Configuración TrackerKing DK19
  - Instalación TrackerKing DK19
  - Configuración de servidor TrackerKing DK19
  - DK19 con Plaspy
  - Configuración de rastreador GPS TrackerKing
  - Configuración de rastreador de vehículo
  - Configuración de plataforma para DK19
  - Configuración de rastreador Plaspy
  - Configuración GPS TrackerKing DK19
---

# TrackerKing - Configuración del DK19

Esta página describe el contexto público de configuración para usar el TrackerKing DK19 con Plaspy. Se centra en los ajustes prácticos de servidor y plataforma necesarios para que el DK19 sea visible en Plaspy y explica qué debe preparar antes de integrar el dispositivo con la plataforma.

Plaspy emplea ajustes compartidos de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del DK19, la revisión de hardware, el tipo de instalación y las herramientas de configuración que use el proveedor durante la puesta en marcha.

## Resumen de la configuración

Este proceso prepara el DK19 para comunicarse de forma fiable con Plaspy, de modo que usted pueda ver ubicación en tiempo real, eventos de estado y telemetría básica en el panel de Plaspy.

- Apunte el dispositivo al endpoint del servidor de Plaspy y configure el puerto compartido para que el DK19 informe al plataforma correcta.
- Seleccione el tipo de transporte (UDP o TCP) si la interfaz de configuración del DK19 lo requiere.
- Guarde y aplique la nueva configuración de servidor y reinicie el dispositivo si la herramienta del fabricante exige un reinicio.
- Verifique que el DK19 informe ubicación y eventos a Plaspy y confirme que aparece en su cuenta.
- Valide alarmas y entradas clave como la detección de ignición ACC y entradas de inmovilizador en Plaspy una vez que el dispositivo esté reportando.
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detectará automáticamente el protocolo del DK19 para su análisis.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888 (Plaspy uses the same port for all supported devices)  
- Transport: UDP or TCP are both supported by Plaspy; configure the DK19 for either transport if required by the device settings  
- Protocol detection: Plaspy automatically detects the tracker protocol so you do not need to preselect protocol parsing on the platform

## Requisitos habituales antes de la instalación

- Una unidad DK19 alimentada y operativa, instalada o conectada a una fuente de alimentación de banco dentro del rango de voltaje del dispositivo.
- Una SIM celular activa y conectividad móvil para el DK19, ya que utiliza un módulo 4G Cat‑1 con retroceso a 2G donde corresponda.
- Acceso al método o software de configuración del fabricante TrackerKing utilizado para provisionar los ajustes del DK19.
- Una cuenta de Plaspy y acceso a la plataforma Plaspy para poder verificar el dispositivo después de que empiece a reportar.
- Conocimiento de la versión de firmware del dispositivo y de cualquier instrucción específica del proveedor que afecte el comportamiento de red o del protocolo.
- Herramientas para registrar o monitorear la sesión del dispositivo durante la configuración inicial, como una consola serial o una utilidad del fabricante si está disponible.

## Cómo se conecta este rastreador a Plaspy

El DK19 transmite ubicación, movimiento y estado del dispositivo al endpoint de Plaspy para que administradores de flota y propietarios puedan monitorear el activo en tiempo real y recibir alertas basadas en eventos.

- El DK19 se configura para reportar al endpoint y puerto compartido de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).  
- La telemetría del dispositivo y las alarmas se envían por el transporte seleccionado (UDP o TCP) y son analizables por Plaspy.  
- Plaspy detecta automáticamente el protocolo del DK19 entre los formatos compatibles, por lo que los datos de rastreo se interpretan sin selección manual del protocolo en la plataforma.  
- Tras la configuración, Plaspy muestra actualizaciones de posición en vivo, eventos de estado de ignición y notificaciones de alarma del DK19.  
- Las rutas históricas y los puntos retransmitidos desde retransmisiones por zonas sin cobertura estarán disponibles en Plaspy una vez que el dispositivo reporte de manera consistente.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del TrackerKing DK19 proporcionado por el fabricante o instalador.  
2. En los ajustes de servidor del dispositivo introduzca el servidor de Plaspy usando el dominio o la IP: d.plaspy.com o 54.85.159.138.  
3. Configure el puerto del dispositivo a 8888 (este es el puerto compartido que Plaspy utiliza para todos los dispositivos compatibles).  
4. Si el DK19 requiere selección de transporte, elija UDP o TCP según su preferencia de red o la orientación del instalador.  
5. Aplique o guarde la configuración en la herramienta del DK19 y confirme que los cambios fueron aceptados.  
6. Reinicie o haga un ciclo de alimentación del dispositivo si las instrucciones del fabricante indican que es necesario.  
7. Valide que el DK19 informa a Plaspy comprobando su cuenta de Plaspy y confirmando que la telemetría y los eventos aparecen correctamente.

## Ejemplos de comandos de configuración

La documentación del fabricante y las utilidades de configuración del DK19 varían según el firmware y las herramientas de aprovisionamiento. Dado que los comandos y formatos de configuración del DK19 los proporciona TrackerKing y sus herramientas, la sintaxis exacta puede diferir.

Si utiliza una herramienta de aprovisionamiento de TrackerKing, siga las instrucciones del proveedor para establecer:
- Server: d.plaspy.com or 54.85.159.138
- Port: 8888
- Transport: UDP or TCP

Para ejemplos de comandos precisos y la sintaxis del lado del dispositivo consulte el manual de usuario del TrackerKing DK19 o el software de configuración del proveedor. Plaspy recibirá y analizará los datos una vez que el servidor y el puerto estén correctamente configurados.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los menús de configuración y las opciones disponibles; confirme siempre la versión de firmware del DK19 antes de seguir los pasos.  
- Elegir UDP frente a TCP puede afectar la semántica de entrega; ambos son aceptados por Plaspy, así que elija el transporte que coincida con las necesidades de confiabilidad de su red y la recomendación del instalador.  
- Debido a que Plaspy detecta automáticamente el protocolo, normalmente no necesita cambiar la configuración de análisis de protocolo en la plataforma al incorporar dispositivos DK19.  
- Las buenas prácticas del instalador incluyen verificar el registro en la red móvil y la calidad de señal antes de finalizar la ubicación del dispositivo.  
- Revise la documentación del producto TrackerKing para cualquier comando específico del dispositivo o pasos de aprovisionamiento especiales antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Usar el DK19 con Plaspy ofrece una forma sencilla de recopilar ubicación en tiempo real, estado de ignición y eventos de alarma desde un rastreador vehicular compacto. El modelo de configuración de servidor compartido de Plaspy simplifica la incorporación porque se usa un único endpoint y puerto para los dispositivos, y Plaspy maneja la detección automática del protocolo.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para las instrucciones más recientes específicas del dispositivo DK19, notas de firmware y detalles del fabricante, verifique la documentación actual en https://trackerking.cn/. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que siempre confirme las directrices más recientes antes del despliegue.
