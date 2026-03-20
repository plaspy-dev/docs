---
slug: /appello/tk102/configuration
id: tk102-configuration
sidebar_label: Configuration
title: Appello - TK102 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Appello TK102 con Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - Configuración Appello TK102
  - Instalación Appello TK102
  - Appello TK102 Plaspy
  - Configuración servidor TK102
  - Software de rastreo TK102
  - Configuración GPS Appello
  - Guía de instalación de rastreador GPS
  - Configuración de rastreo de vehículos
  - Rastreo de flotas Plaspy
  - Compatibilidad de rastreadores Plaspy
---

# Appello - Configuración del TK102

Esta página describe el contexto público para usar el rastreador Appello TK102 con Plaspy. Explica los ajustes de servidor compartidos que utiliza Plaspy y resume los pasos generales necesarios para preparar el TK102 y conectarlo a la plataforma. El contenido se basa en la descripción del modelo y en las guías de configuración públicas; se enfoca en cómo apuntar el rastreador al endpoint de Plaspy y verificar la conectividad.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK102 es un rastreador compacto GSM/GPRS y puede configurarse mediante los métodos del fabricante, como comandos SMS o una herramienta del proveedor; en general deberá establecer el APN del dispositivo y el servidor de destino para que reporte a Plaspy en el endpoint y puerto comunes.

## Resumen de configuración

Este proceso prepara el Appello TK102 para comunicarse de forma fiable con Plaspy y hace que la ubicación del dispositivo sea visible en la plataforma. El objetivo es proporcionar acceso a la red, apuntar el dispositivo al endpoint compartido de Plaspy y confirmar que el equipo está reportando según lo esperado.

- Apuntar el rastreador al endpoint del servidor de Plaspy para que envíe datos a la plataforma
- Asegurar que el rastreador tenga acceso a la red móvil y que el APN requerido esté configurado
- Seleccionar el transporte soportado (UDP o TCP) cuando el equipo requiera una opción
- Guardar y aplicar la configuración del fabricante y permitir que el dispositivo se conecte
- Validar la visibilidad y el reporte en Plaspy para que la unidad aparezca en las vistas de monitoreo

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y el mismo puerto se utiliza para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un dispositivo Appello TK102 cargado y operativo con cobertura de red
- Acceso al método oficial de configuración del fabricante o al software (por ejemplo, comandos SMS o una herramienta del proveedor)
- Una tarjeta SIM con un plan de datos activo si el dispositivo usa reporte por paquetes de datos
- Conocer el APN del operador móvil correspondiente a la SIM utilizada en el rastreador
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para validar el reporte del dispositivo tras la configuración

## Cómo se conecta este rastreador a Plaspy

El TK102 se configura para reportar su ubicación y estado a Plaspy apuntando al endpoint y puerto compartidos del servidor. Una vez que el dispositivo esté dirigido a Plaspy y tenga acceso a la red, la plataforma recibirá las transmisiones entrantes y las asociará con el registro de dispositivo correspondiente.

- El rastreador envía mensajes de ubicación y estado al endpoint de Plaspy en d.plaspy.com o 54.85.159.138
- Todos los dispositivos usan el mismo puerto de Plaspy, por lo que existe un destino consistente para la configuración
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente solo necesita indicar el servidor y el transporte
- El dispositivo será visible en Plaspy cuando inicie conexiones correctamente y transmita datos
- El monitoreo operativo y el reporte básico de eventos quedan disponibles una vez que el rastreador esté transmitiendo a la plataforma

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el TK102 (por ejemplo, comandos SMS del proveedor o la herramienta de configuración).
2. Introduzca el servidor de Plaspy especificando d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido usado por Plaspy para todos los equipos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte; ambos son compatibles con Plaspy.
5. Guarde o aplique la configuración en el rastreador y cambie el dispositivo al modo de reporte normal.
6. Valide que el dispositivo reporte a Plaspy comprobando la lista de dispositivos y los mensajes recientes en la plataforma Plaspy.

## Notas de configuración

- Algunas unidades TK102 se configuran mediante comandos SMS, mientras que otras pueden usar una herramienta del proveedor; utilice el método oficial suministrado por el fabricante y evite compartir públicamente cadenas de comandos sensibles.
- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar las opciones de configuración disponibles; las prácticas del instalador pueden variar según el distribuidor.
- Cuando el dispositivo ofrece la opción, Plaspy acepta tanto TCP como UDP; elija el transporte que mejor se adapte a su entorno de red o a las indicaciones del instalador.
- Confirme el APN y la conectividad móvil antes de intentar apuntar el dispositivo a Plaspy, ya que la falta de conectividad de datos es un obstáculo común.
- Permita una ventana breve de validación después de aplicar los ajustes para asegurarse de que el rastreador tenga tiempo de registrarse en el servidor de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Appello TK102 con Plaspy ofrece una forma sencilla de centralizar los datos de rastreo y disponer de la posición y el estado del dispositivo en una única plataforma de monitoreo. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo reducen la configuración por dispositivo requerida, de modo que los instaladores pueden concentrarse en la preparación de la red y en los valores correctos de servidor/puerto.

Para saber más sobre Plaspy y cómo soporta las integraciones de rastreadores, visite https://www.plaspy.com. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo; verifique los detalles específicos del dispositivo, la sintaxis de comandos y el comportamiento del firmware en el sitio oficial del fabricante http://www.cnjeo.com/.
