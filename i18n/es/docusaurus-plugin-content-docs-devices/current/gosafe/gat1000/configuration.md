---
slug: /gosafe/gat1000/configuration
id: gat1000-configuration
sidebar_label: Configuration
title: Gosafe - GAT1000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Gosafe GAT1000 y apuntarlo al servidor compartido de Plaspy
keywords:
  - Configuración Gosafe GAT1000
  - Configurar GAT1000 Gosafe
  - GAT1000 configuración Plaspy
  - Ajustes de servidor GAT1000
  - Configuración rastreador GPS Gosafe
  - Configuración seguimiento GAT1000
  - Configuración rastreador Plaspy
  - Configuración Gosafe en Plaspy
  - Configuración rastreadores flota
  - Configuración rastreador de activos
---

# Gosafe - Configuración del GAT1000

Esta página ofrece contexto público sobre la configuración para usar el rastreador de activos Gosafe GAT1000 con la plataforma Plaspy. Resume los ajustes compartidos de servidor que Plaspy espera y describe los pasos prácticos que normalmente se requieren para apuntar el dispositivo a Plaspy, de modo que el equipo pueda enviar ubicación y telemetría a la plataforma.

Plaspy utiliza un endpoint y un puerto comunes para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante para el GAT1000 pueden variar según la versión de firmware, la revisión de hardware, las herramientas del instalador y el método de configuración elegido, por lo que esta guía se centra en los ajustes públicos de Plaspy y en un flujo de trabajo práctico, en lugar de procedimientos propietarios del fabricante.

## Resumen de la configuración

El objetivo de la configuración es preparar el GAT1000 para comunicarse de forma fiable con Plaspy, validar la conectividad y hacer visible el equipo en su cuenta de Plaspy. Utilice las herramientas del fabricante para apuntar el rastreador al endpoint compartido de Plaspy y confirme que las posiciones y eventos llegan a la plataforma.

- Configure el destino de red del dispositivo al endpoint compartido de Plaspy para que los datos se encaminen a Plaspy.
- Seleccione el protocolo de transporte (UDP o TCP) en el rastreador si es necesario y asegúrese de que el equipo use el puerto de Plaspy.
- Guarde y aplique la configuración usando el método o software oficial de Gosafe.
- Valide la conectividad y el envío confirmando que las fijaciones GNSS y la telemetría aparecen en Plaspy.
- Verifique también las asignaciones de entradas/salidas o sensores que planee usar en los paneles y reglas de Plaspy.

## Ajustes del servidor Plaspy

Utilice las siguientes configuraciones públicas de conexión de Plaspy al configurar el GAT1000. Plaspy usa el mismo puerto para todos los dispositivos soportados y la plataforma detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the device may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Una unidad GAT1000 con alimentación o batería cargada y accesible para configuración y pruebas.
- Conectividad celular activa para el dispositivo (el GAT1000 incluye soporte LTE Cat 1) y cualquier provisión de SIM o activación de eSIM que sea necesaria.
- Acceso al método o software oficial de configuración de Gosafe para el GAT1000 para poder cambiar servidor, puerto y transporte.
- Conocimiento del identificador del dispositivo o número de serie proporcionado por Gosafe para localizar el equipo en Plaspy una vez que se conecte.
- Una cuenta en Plaspy o acceso a la plataforma donde se registrará y supervisará el dispositivo.
- Visibilidad básica de GNSS durante la validación para confirmar que el equipo envía fijaciones de ubicación a Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el GAT1000 envía fijaciones GNSS, eventos de entradas/salidas y telemetría al endpoint y puerto compartido de Plaspy. Plaspy ingiere esos mensajes, mapea los campos en la plataforma y muestra la ubicación en tiempo real y los datos históricos para monitorización e informes.

- El rastreador envía ubicación y telemetría a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del GAT1000; Plaspy aceptará cualquiera de los dos y detectará el protocolo automáticamente.
- El dispositivo envía fijaciones GNSS y eventos configurados de entradas/salidas para que Plaspy muestre posición, estado de encendido y telemetría de sensores.
- Plaspy recibe y decodifica los mensajes del dispositivo y los hace visibles en paneles, alertas e informes.
- Validar que el dispositivo reporta correctamente confirma que el rastreador está comunicándose con el endpoint compartido de Plaspy.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración del Gosafe GAT1000 proporcionado por el fabricante.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como destino.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los equipos).
4. Elija UDP o TCP como transporte si el GAT1000 requiere seleccionar uno.
5. Aplique o guarde los cambios de configuración en la herramienta del dispositivo.
6. Reinicie el GAT1000 si las instrucciones del fabricante indican que es necesario para que los ajustes entren en vigor.
7. Valide que el dispositivo reporta a Plaspy confirmando que las fijaciones GNSS y la telemetría aparecen en la vista de su plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y el formato de configuración varían según el firmware de Gosafe y la herramienta que utilice (consola serial, utilidad web o software del fabricante). Dado que la sintaxis de configuración difiere entre versiones de firmware y herramientas, siga la documentación de Gosafe para la sintaxis precisa y utilice los ajustes de servidor de Plaspy indicados arriba al ingresar los valores de destino.

Si utiliza un método de comandos por SMS o serie suministrado por Gosafe, reemplace los valores de marcador por sus configuraciones reales y asegúrese de que el destino esté establecido en d.plaspy.com o 54.85.159.138 y el puerto 8888. Consulte las guías de configuración de Gosafe para las cadenas de comando y el formato soportado.

## Notas sobre la configuración

- Diferentes versiones de firmware y revisiones de hardware pueden cambiar la sintaxis de comandos y las opciones disponibles; siempre consulte la documentación de Gosafe correspondiente al firmware del GAT1000 que esté usando.
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red; Plaspy acepta ambos y detectará el protocolo al conectarse.
- Asegúrese de que la provisión de la SIM y la cobertura celular sean adecuadas para la operación LTE Cat 1 en la región de despliegue.
- Mantenga un registro de los cambios que realice en la configuración del dispositivo para reproducir o solucionar la instalación en múltiples unidades.
- Las herramientas de configuración del fabricante o los conjuntos de comandos por SMS son la fuente autorizada para comandos específicos del dispositivo y procedimientos de restablecimiento.

## Por qué usar Plaspy con esta configuración

Usar el Gosafe GAT1000 con Plaspy ofrece a las organizaciones visibilidad en tiempo real y telemetría a nivel de activo para maquinaria pesada, remolques y activos de alto valor en exteriores. La combinación de un dispositivo robusto diseñado para entornos exigentes y la ingesta centralizada y los informes de Plaspy crea una solución escalable para rastreo, alertas y supervisión operativa.

Para conocer más sobre Plaspy y cómo soporta flotas mixtas y flujos de telemetría, visite https://www.plaspy.com. Para métodos de configuración específicos del GAT1000, comportamiento de firmware y detalles del fabricante más recientes, verifique la información actual en el sitio oficial de Gosafe https://gosafesystem.com/.
