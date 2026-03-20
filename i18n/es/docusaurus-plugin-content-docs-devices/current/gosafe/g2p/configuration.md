---
slug: /gosafe/g2p/configuration
id: g2p-configuration
sidebar_label: Configuration
title: Gosafe - G2P Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para apuntar el rastreador personal Gosafe G2P a Plaspy y habilitar reporte de ubicación y estado
keywords:
  - Configuración Gosafe G2P
  - Instalación Gosafe G2P
  - Configuración servidor Gosafe G2P
  - Configuración rastreador GPS G2P
  - Integración tracker Gosafe Plaspy
  - Configuración G2P para Plaspy
  - Configuración SMS Gosafe G2P
  - Configuración rastreador personal G2P
  - Configuración plataforma seguimiento G2P
  - Instalación software rastreo G2P
---

# Gosafe - Configuración G2P

Esta página describe el contexto público de configuración para usar el rastreador personal Gosafe G2P con Plaspy. Aquí encontrará las indicaciones prácticas sobre los ajustes de servidor y el flujo necesario para apuntar un dispositivo G2P a la plataforma Plaspy, de modo que el dispositivo pueda reportar ubicación y estado. La orientación está enfocada en el endpoint compartido de Plaspy y en cómo preparar el dispositivo para que sea visible en la plataforma, más que en herramientas propietarias del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El G2P admite comandos SMS simples y acceso a plataforma, por lo que los enfoques comunes incluyen usar el método de configuración del fabricante o comandos SMS para establecer el servidor y el puerto de Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el G2P para que se comunique de manera confiable con Plaspy y permita el seguimiento en tiempo real y el reporte de eventos. Esto implica establecer el endpoint y puerto correctos de Plaspy, seleccionar el transporte apropiado cuando sea necesario y validar la conectividad desde el dispositivo hacia la plataforma.

- Configure el rastreador para que reporte al endpoint del servidor Plaspy y así los paquetes de ubicación lleguen a la plataforma
- Establezca el puerto común de Plaspy usado por todos los dispositivos compatibles para asegurar un enrutamiento consistente
- Elija el modo de transporte (UDP o TCP) si el equipo requiere una selección explícita
- Valide los reportes del dispositivo comprobando su visibilidad en Plaspy una vez aplicada la configuración
- Aplique los ajustes mediante el método de configuración del fabricante o comandos SMS según las herramientas disponibles

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, 8888, y la plataforma detectará automáticamente el protocolo correcto.

## Requisitos habituales antes de la configuración

- Un dispositivo G2P encendido y operativo con carga de batería suficiente
- Una tarjeta SIM funcional en el dispositivo si se requiere SMS o datos móviles para la configuración y el reporte
- Acceso al método de configuración oficial de Gosafe para el G2P o la capacidad de enviar comandos SMS para la configuración
- El IMEI o identificador del dispositivo listo para registro o verificación al validar la conectividad
- Acceso a una cuenta Plaspy o los datos de flota apropiados para confirmar que el dispositivo aparece en la plataforma
- Un plan de pruebas breve para confirmar el reporte de ubicación y la visibilidad de eventos después de la configuración

## Cómo se conecta este rastreador a Plaspy

El G2P se configura para enviar paquetes de ubicación y estado al endpoint de Plaspy, de modo que el dispositivo sea visible en la plataforma. Una vez configurado, Plaspy recibirá los mensajes del rastreador en el servidor y puerto compartidos e identificará automáticamente el protocolo del dispositivo.

- El rastreador envía mensajes de ubicación y estado al endpoint del servidor Plaspy d.plaspy.com
- Los mensajes se envían a Plaspy en 54.85.159.138 por el puerto 8888
- El transporte puede ser UDP o TCP según la elección de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes
- Tras una configuración exitosa, el dispositivo aparecerá en Plaspy y reportará eventos y actualizaciones de ubicación para su monitoreo

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración Gosafe G2P, o prepare los comandos SMS si el equipo usa configuración vía SMS.
2. Ingrese la dirección del servidor Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en los campos de configuración del dispositivo.
3. Ajuste el puerto del dispositivo a 8888, ya que es el puerto compartido que usa Plaspy para todos los equipos.
4. Seleccione UDP o TCP si el rastreador requiere elegir un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante o envíe el comando SMS de configuración al dispositivo.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo y los eventos recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos exactos de configuración o la sintaxis SMS para el Gosafe G2P varían según el firmware y las herramientas del proveedor y son provistos por el fabricante. Dado que los comandos y la sintaxis pueden cambiar, consulte la documentación oficial de Gosafe o el manual del dispositivo para las frases SMS o los pasos de software exactos necesarios para establecer el servidor y el puerto.

Si utiliza SMS para configurar el G2P, los flujos públicos típicos implican un comando para establecer la dirección del servidor y un comando para fijar el puerto y el transporte, seguido de un comando de guardar o reinicio. Use la documentación de Gosafe como referencia autorizada para las cadenas de comando exactas.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos y las opciones disponibles; siempre verifique con la documentación actual de Gosafe.
- Elija UDP o TCP de acuerdo con el requisito del dispositivo; Plaspy soporta ambos y aceptará datos en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador al recibir los mensajes.
- Si el G2P admite configuración por SMS, asegúrese de que la SIM pueda enviar y recibir SMS y que cualquier APN o ajuste de datos requerido esté configurado correctamente según el fabricante.
- Valide la conectividad después de aplicar la configuración comprobando mensajes entrantes y la presencia del dispositivo en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe G2P con Plaspy ofrece a organizaciones y cuidadores visibilidad práctica de la ubicación y el estado del dispositivo mediante una configuración de servidor compartida. Apuntar el G2P a d.plaspy.com o a 54.85.159.138 en el puerto 8888 simplifica la integración porque Plaspy utiliza el mismo puerto entre dispositivos y detecta automáticamente el protocolo, reduciendo la complejidad de configuración por unidad.

Para obtener más información sobre Plaspy y los flujos de seguimiento compatibles visite https://www.plaspy.com. Para comandos específicos del dispositivo, comportamientos de firmware y las instrucciones oficiales de configuración del fabricante para el Gosafe G2P, verifique los detalles en el sitio oficial de Gosafe https://gosafesystem.com/ ya que la documentación del fabricante es la fuente autorizada para la configuración específica del equipo.
