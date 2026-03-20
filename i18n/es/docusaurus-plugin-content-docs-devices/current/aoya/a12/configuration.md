---
slug: /aoya/a12/configuration
id: a12-configuration
sidebar_label: Configuration
title: AoYa - A12 Configuration
sidebar_class_name: menu_item_tracker
description: Cómo configurar el rastreador AoYa A12 para usarlo con Plaspy empleando la configuración pública del servidor y guía básica
keywords:
  - configuración AoYa A12
  - instalación AoYa A12
  - configuración de servidor AoYa A12
  - configuración AoYa A12 Plaspy
  - configuración rastreador GPS AoYa
  - configuración de seguimiento AoYa A12
  - integración de dispositivo Plaspy
  - configuración rastreador de vehículo
  - configuración de seguimiento de flotas
  - ajustes de servidor rastreador GPS
---

# AoYa - A12 Configuración

Esta página describe el contexto de configuración pública para usar el rastreador GPS AoYa A12 con Plaspy. Explica los ajustes de servidor que Plaspy requiere y cómo se prepara el dispositivo para comunicarse con la plataforma, basándose únicamente en información pública y la descripción del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante para configurar el A12 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El A12 suele configurarse con los métodos soportados por el fabricante, como SMS y utilidades del dispositivo; esta página resume esos pasos públicos sin reproducir comandos específicos del equipo ni credenciales protegidas.

## Resumen de la configuración

El proceso prepara el AoYa A12 para enviar datos de ubicación y estado a Plaspy y para que el dispositivo sea visible en la plataforma. El objetivo es apuntar el rastreador al endpoint del servidor de Plaspy, confirmar el tipo de transporte y verificar que las actualizaciones llegan al sistema.

- Configure el rastreador para que reporte al endpoint público de Plaspy y así los servicios de la plataforma reciban las posiciones.
- Ajuste el transporte y el puerto del equipo para que los paquetes de datos lleguen de forma fiable a Plaspy.
- Asegúrese de que el dispositivo tenga una conexión móvil de datos válida y los ajustes APN necesarios para permitir el reporte.
- Valide la conectividad y la visibilidad en Plaspy tras aplicar la configuración para confirmar que el equipo está activo.
- Use el canal de configuración admitido por el fabricante, como SMS o software del proveedor, para aplicar estos ajustes públicos.

## Ajustes del servidor Plaspy

- El dominio de servidor d.plaspy.com es el dominio público a utilizar para el reporte del rastreador.  
- La IP del servidor 54.85.159.138 es el endpoint numérico publicado para la compatibilidad con Plaspy.  
- El puerto 8888 es el puerto único usado por Plaspy para las conexiones de dispositivos.  
- Soporte de transporte: configure el rastreador para usar UDP o TCP según las opciones del dispositivo.  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no necesita especificar el tipo de protocolo en la plataforma; el servidor acepta ambos tipos de transporte en el puerto compartido.

## Requisitos típicos antes de la configuración

- Confirme que el AoYa A12 esté energizado y accesible en el momento de la configuración.  
- Asegúrese de que el rastreador tenga una SIM móvil funcional con datos habilitados si el reporte será por red móvil.  
- Tenga acceso al método o software de configuración del fabricante, por ejemplo SMS o herramientas del proveedor, según lo proporcionado por el vendedor o el manual.  
- Conozca los ajustes APN del operador móvil para que el rastreador pueda establecer una sesión de datos cuando corresponda.  
- Esté preparado para seleccionar UDP o TCP si el dispositivo exige una elección explícita de transporte.  
- Acceso al vehículo y un procedimiento de instalación planificado para probar la conectividad después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AoYa A12 envía sus datos de ubicación y operación al endpoint y puerto compartidos de Plaspy para que la plataforma pueda mostrar y procesar esos eventos. Plaspy recibe los datos entrantes y asocia la fuente con la cuenta correspondiente.

- El rastreador se configura para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.  
- El transporte puede ser UDP o TCP según la selección realizada durante la configuración.  
- Plaspy detecta automáticamente el protocolo del rastreador y gestiona el protocolo entrante de forma adecuada.  
- Los datos enviados por el rastreador se vuelven visibles en Plaspy para monitoreo en tiempo real y revisión histórica.  
- Tras la configuración, valide que el dispositivo aparezca en Plaspy y que se reciban reportes periódicos.

## Flujo de trabajo habitual de configuración

1. Acceda al método de configuración oficial del fabricante o al software recomendado para el AoYa A12.  
2. Ingrese la dirección del servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el dispositivo para usar el puerto 8888 al reportar a Plaspy.  
4. Seleccione el transporte UDP o TCP si el rastreador requiere una selección explícita.  
5. Guarde o aplique la configuración mediante el método del fabricante (SMS o utilidad del proveedor) y confirme que el dispositivo acepta los cambios.  
6. Valide que el dispositivo reporte a Plaspy confirmando que aparece en la plataforma y que se reciben datos.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar los pasos exactos; revise siempre la guía actual del fabricante.  
- Las prácticas de instalación varían según la región y el proveedor; algunos instaladores prefieren utilidades del proveedor mientras que otros usan configuraciones por SMS.  
- TCP y UDP se comportan de forma distinta en redes móviles; elija el transporte que mejor se adapte a la fiabilidad de su red y a las recomendaciones del fabricante.  
- El A12 permite configurar APN y parámetros de red mediante los métodos del fabricante; proporcione los datos APN correctos del operador cuando sean necesarios sin compartir credenciales.  
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y centraliza los ajustes de servidor.

## Por qué usar Plaspy con esta configuración

Usar el AoYa A12 con Plaspy ofrece una forma directa de integrar los datos de ubicación del vehículo en una única plataforma de monitoreo. Apuntar el dispositivo al endpoint y puerto compartidos de Plaspy permite centralizar la visibilidad, monitorear movimientos en tiempo real y aprovechar las herramientas de la plataforma para la supervisión operativa.

Para saber más sobre Plaspy, visite https://www.plaspy.com. Verifique los métodos de configuración específicos del dispositivo y el comportamiento del firmware en el sitio del fabricante http://www.aoyagps.com/ ya que las especificaciones y los procedimientos de instalación pueden cambiar con el tiempo.
