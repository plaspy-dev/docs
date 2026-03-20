---
slug: /appello/obd/configuration
id: obd-configuration
sidebar_label: Configuration
title: Appello - OBD Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador OBD Appello para usar con Plaspy mediante ajustes públicos del servidor y una guía práctica
keywords:
  - Configuración Appello OBD
  - Instalación Appello OBD
  - Configuración servidor Appello OBD
  - Appello OBD Plaspy
  - Configuración rastreador GPS Appello
  - Configuración rastreador vehicular
  - Guía configuración OBD GPS
  - Rastreadores para Plaspy
  - Guía instalación rastreador OBD
  - Seguimiento de flotas Appello
---

# Appello - Configuración OBD

Esta página explica el contexto de configuración pública para utilizar el rastreador GPS Appello OBD con Plaspy. Resume los ajustes esenciales que debe aplicar para dirigir el dispositivo al servidor de Plaspy y describe consideraciones generales de instalación basadas en la especificación del Appello OBD y los métodos de configuración públicos disponibles.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione el proveedor. El Appello OBD soporta comunicaciones GSM estándar y comúnmente permite métodos por SMS o por software para aplicar parámetros de servidor y APN; esta página se centra en el endpoint público de Plaspy y en el flujo general para que el rastreador reporte a la plataforma.

## Resumen de la configuración

El objetivo al configurar un Appello OBD para Plaspy es preparar el dispositivo para un envío de datos seguro y confiable a la plataforma y confirmar su visibilidad dentro de la interfaz de Plaspy. La configuración suele implicar seleccionar el endpoint correcto del servidor, confirmar el tipo de transporte y validar que el dispositivo esté en línea y transmitiendo.

- Apuntar el rastreador al endpoint de Plaspy usando los ajustes públicos del servidor.
- Seleccionar el protocolo de transporte compatible con el rastreador y Plaspy, UDP o TCP en el puerto compartido de Plaspy.
- Verificar que el dispositivo tenga conectividad de datos móviles y parámetros de red correctos.
- Aplicar y guardar la configuración mediante el método del fabricante, luego validar el reporte en Plaspy.
- Usar la documentación y herramientas del fabricante para pasos específicos del modelo como APN o configuración por SMS.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos valores públicos son el endpoint objetivo al que debe apuntar un rastreador Appello OBD para aparecer en Plaspy.

## Requisitos típicos antes de la configuración

- Un rastreador Appello OBD alimentado e instalado con la alimentación del vehículo disponible
- Una SIM activa con datos móviles habilitados y un APN adecuado configurado
- Acceso al método oficial de configuración de Appello o al software del proveedor para aplicar ajustes de servidor y APN
- Cobertura de red en la zona donde operará el dispositivo para permitir el envío de datos GPRS
- Credenciales o permisos necesarios para configurar el rastreador mediante la herramienta del fabricante o la interfaz SMS
- Una cuenta en Plaspy o acceso a la plataforma para confirmar que el dispositivo aparece después de la configuración

## Cómo se conecta este rastreador a Plaspy

El Appello OBD se configura para enviar su ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy para que la plataforma pueda recibir y mostrar esos datos. La detección automática de protocolo de Plaspy facilita la integración identificando el protocolo del dispositivo una vez que el rastreador envía los primeros paquetes a la plataforma.

- El rastreador se programa para reportar a d.plaspy.com o a la IP suministrada de Plaspy en el puerto 8888
- El transporte de datos puede ser UDP o TCP según la configuración del equipo y la preferencia del instalador
- Una vez que comienza el reporte, Plaspy detecta el protocolo del rastreador y empieza a decodificar los mensajes automáticamente
- Plaspy ingiere las actualizaciones de ubicación y estado y las presenta en el panel de la plataforma para supervisión e informes
- La conectividad exitosa se confirma cuando el dispositivo aparece en Plaspy y envía actualizaciones periódicas

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software proporcionado para el dispositivo Appello OBD.
2. Ingrese el servidor de Plaspy como dominio d.plaspy.com o como la dirección IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, que es el usado por Plaspy para todos los dispositivos compatibles.
4. Elija el protocolo de transporte UDP o TCP si el rastreador solicita selección de transporte.
5. Guarde o aplique la configuración mediante la herramienta del fabricante o por SMS y asegúrese de que el dispositivo acepte el cambio.
6. Valide que el dispositivo reporte a Plaspy y que la plataforma detecte automáticamente el protocolo del rastreador.

Si el fabricante ofrece configuración vía SMS o una interfaz de configuración, utilice ese canal oficial para aplicar los parámetros de servidor y APN en lugar de atajos de terceros.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar los pasos exactos de configuración o las etiquetas de menú disponibles; siempre verifique la revisión del dispositivo antes de continuar.
- Algunos instaladores prefieren la configuración por SMS mientras otros usan el software del proveedor; ambas opciones suelen estar soportadas para dispositivos Appello según la documentación pública.
- TCP y UDP tienen características de entrega diferentes; elija el transporte que mejor se adapte a su despliegue y confirme el comportamiento en Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos y realiza la detección automática de protocolo, lo que reduce la necesidad de seleccionar manualmente el protocolo después de recibir los primeros datos.
- Confirme los detalles de APN y conectividad a través de la documentación del fabricante y la orientación del operador móvil local cuando sea necesario.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un rastreador Appello OBD brinda una vía directa para obtener visibilidad vehicular en tiempo real y monitoreo centralizado de flotas. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy garantiza que la plataforma pueda descubrir y decodificar el dispositivo, habilitando rastreo, alertas y supervisión operativa sin configuraciones de servidor complejas por dispositivo.

Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar las instrucciones de configuración más recientes en el sitio oficial del fabricante http://www.cnjeo.com/ antes de aplicar cualquier cambio.
