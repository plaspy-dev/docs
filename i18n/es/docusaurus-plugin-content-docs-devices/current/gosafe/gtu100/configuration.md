---
slug: /gosafe/gtu100/configuration
id: gtu100-configuration
sidebar_label: Configuration
title: Gosafe - GTU100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Gosafe GTU100 a Plaspy con ajustes de servidor y flujo de configuración
keywords:
  - Configuración Gosafe GTU100
  - Instalación Gosafe GTU100
  - Configuración GTU100 Plaspy
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador Gosafe
  - Guía configuración GTU100
  - Rastreo vehicular GTU100
  - GPS flota GTU100
  - Compatibilidad rastreador Plaspy
  - Configuración servidor GTU100
---

# Gosafe - Configuración del GTU100

Esta página documenta el contexto de configuración pública para usar el rastreador Gosafe GTU100 con la plataforma Plaspy. Explica los ajustes de servidor compartidos por Plaspy y los pasos prácticos que usted puede seguir para preparar el GTU100 para la integración, indicando también dónde pueden variar los pasos según el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden cambiar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas de provisión del proveedor como Gosafe GICUS u otras utilidades. Use esta guía para aplicar los valores públicos de Plaspy y confirme los comandos o flujos específicos del dispositivo con la documentación oficial de Gosafe.

## Visión general de la configuración

El proceso de configuración se centra en dirigir el GTU100 para que reporte telemetría y eventos a Plaspy, validar la conectividad y asegurar que el dispositivo aparezca y actualice correctamente en la plataforma. Las capacidades de red del GTU100 y su procesamiento de eventos a bordo facilitan la integración una vez que se aplican los ajustes de servidor correctos.

- Apunte el GTU100 al endpoint público de Plaspy para que la ubicación y los eventos lleguen a la plataforma.
- Seleccione el protocolo de transporte (UDP o TCP) según la preferencia del instalador o el soporte del firmware.
- Configure el puerto compartido de Plaspy para que los paquetes salientes del dispositivo alcancen al listener correcto en Plaspy.
- Verifique la SIM, el registro en la red y la calidad de señal para asegurar la entrega confiable de datos.
- Confirme que el dispositivo reporte correctamente en Plaspy y que el procesamiento de eventos (GEM) y la gestión remota (GICUS) funcionen como se espera.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS y uso de hostname recomendado
- IP del servidor 54.85.159.138 como alternativa directa al hostname
- Puerto 8888 como puerto único utilizado por Plaspy para todos los dispositivos soportados
- Soporte de transporte UDP o TCP según las opciones de configuración del rastreador
- Detección automática de protocolo en Plaspy para que la plataforma identifique y procese el protocolo del rastreador sin registro de protocolo por dispositivo

## Requisitos habituales antes de la instalación

- Acceso al método o software de configuración oficial de Gosafe, como GICUS, la interfaz web del dispositivo o la herramienta de provisión del proveedor
- Una SIM activa o perfil eSIM con un plan de datos del operador adecuado para la región objetivo y con los ajustes APN configurados si fuese necesario
- Disponibilidad de alimentación y preparación física de la instalación, incluyendo la conexión correcta a la alimentación del vehículo y cualquier cableado requerido para ignición o entradas
- Firmware del dispositivo actualizado a la versión recomendada por el instalador o el proveedor cuando sea posible
- Cobertura de red y verificación de señal en el lugar de la instalación antes de completar la configuración
- Una cuenta en Plaspy o acceso a la plataforma para la validación final del dispositivo y la verificación de visibilidad

## Cómo se conecta este rastreador a Plaspy

El GTU100 transmite datos de ubicación, movimiento y sensores a Plaspy enviando paquetes IP al endpoint y puerto compartidos de Plaspy. Plaspy recibe el tráfico del dispositivo en el listener común y determina automáticamente el manejador de protocolo apropiado para interpretar los mensajes del rastreador.

- El rastreador informa posiciones GNSS, eventos de movimiento y telemetría de sensores a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los datos pueden enviarse por UDP o TCP según el transporte configurado en el GTU100
- Plaspy detecta automáticamente el protocolo del rastreador y enruta los mensajes entrantes al parser y registro de dispositivo correctos
- Registros basados en eventos como cambios de ignición, alertas por choque e identificación de conductor se procesan y reenvían a Plaspy una vez que el dispositivo está reportando activamente
- Una conectividad exitosa hace que el GTU100 sea visible para el seguimiento en tiempo real, reportes históricos y la gestión remota

## Flujo típico de configuración

1. Acceda al método o software de configuración oficial de Gosafe proporcionado por el proveedor (por ejemplo GICUS, la interfaz web del proveedor, o herramientas aprobadas por SMS/USB).
2. En la sección de servidor o APN, ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto de destino en 8888, que es el puerto único que Plaspy utiliza para todos los dispositivos soportados.
4. Elija el protocolo de transporte UDP o TCP si el GTU100 requiere una selección de transporte en su configuración.
5. Aplique o guarde la configuración del dispositivo según el flujo de trabajo de la herramienta del fabricante.
6. Reinicie el GTU100 si las instrucciones del proveedor indican que es necesario para que los ajustes surtan efecto.
7. Valide la conectividad confirmando que el dispositivo reporte a Plaspy y aparezca en la plataforma con actualizaciones oportunas de posición y eventos.

## Ejemplos de comandos de configuración

El modelConfiguration público para el GTU100 no incluye cadenas de comando específicas en esta versión. Los comandos exactos de configuración y el método para aplicarlos varían según la herramienta del fabricante, el firmware y las compilaciones regionales. Las herramientas proporcionadas por Gosafe, como GICUS, utilidades USB o conjuntos de comandos SMS, se usan comúnmente para establecer hostnames de servidor, direcciones IP, puertos y transporte.

Si necesita ejemplos de comandos para un firmware o flujo de provisión particular, consulte la guía de configuración oficial de Gosafe o la documentación de provisión del proveedor. El fabricante normalmente proporciona la sintaxis de comandos explícita, marcadores de posición para valores de APN como [apn] o credenciales como [apnu] y [apnp] cuando aplique, e instrucciones para pasos opcionales de reinicio.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar las opciones de menú disponibles y la sintaxis exacta de los comandos; confirme siempre con el modelo y la versión de firmware en uso.
- Elija UDP o TCP según las preferencias de instalación y cualquier recomendación de Gosafe o de su proveedor de conectividad; Plaspy acepta ambos transportes en el puerto 8888.
- Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que estandarizar en d.plaspy.com y el puerto 8888 simplifica la provisión de flotas.
- Use las herramientas oficiales de provisión de Gosafe para despliegues masivos y así asegurar ajustes consistentes y aprovechar capacidades de GICUS o actualizaciones OTA.
- Si la configuración inicial se realiza por SMS según el proveedor, siga cuidadosamente la documentación de comandos SMS de Gosafe y verifique los resultados en la plataforma Plaspy.

## Por qué usar Plaspy con esta configuración

Utilizar el GTU100 con Plaspy proporciona a los operadores de flotas una integración sólida para ubicación en tiempo real, alertas basadas en eventos y telemetría de sensores. El receptor multi-GNSS del GTU100, las opciones de doble SIM o eSIM y el procesamiento de eventos a bordo trabajan en conjunto para ofrecer visibilidad continua de la posición y el estado del vehículo, mientras que Plaspy recibe la telemetría entrante y la presenta para monitoreo, generación de informes y flujos operativos.

Para obtener más información sobre Plaspy y cómo ingiere la telemetría de dispositivos, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento del firmware y detalles del fabricante, verifique la información actual en el sitio de Gosafe en https://gosafesystem.com/.
