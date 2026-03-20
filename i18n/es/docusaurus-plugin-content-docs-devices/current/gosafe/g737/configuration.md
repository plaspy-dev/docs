---
slug: /gosafe/g737/configuration
id: g737-configuration
sidebar_label: Configuration
title: Gosafe - G737 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar la tobillera Gosafe G737 con Plaspy, incluyendo ajustes de servidor y flujo de trabajo
keywords:
  - Configuración Gosafe G737
  - Instalación Gosafe G737
  - Configuración de servidor Gosafe G737
  - Gosafe G737 Plaspy
  - Configuración del rastreador Gosafe
  - Configuración GPS G737
  - Integración G737 Plaspy
  - Configuración GPS para tobillera
  - Instalación rastreador monitoreo electrónico
  - Ajustes de servidor rastreador GPS
---

# Gosafe - Configuración del G737

Esta página describe el contexto público de configuración para usar la tobillera Gosafe G737 con la plataforma Plaspy. Explica los ajustes de servidor compartidos de Plaspy que deberá ingresar en el dispositivo o en la herramienta de configuración del fabricante, detalla qué verificar antes de la integración y ofrece un flujo de trabajo práctico para poner un G737 en línea con Plaspy para seguimiento en tiempo real e informes de eventos.

Plaspy utiliza un punto de acceso y un puerto compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que Gosafe proporcione, por lo que use esta guía como referencia práctica y confirme los pasos específicos del equipo con la documentación oficial del fabricante.

## Resumen de la configuración

El objetivo de la configuración es preparar el G737 para que envíe de forma continua y fiable datos de ubicación, eventos y telemetría a Plaspy, de modo que el dispositivo aparezca en la plataforma y genere las alertas e historiales esperados. La configuración consiste principalmente en dirigir el dispositivo a los ajustes del servidor Plaspy, seleccionar el método de transporte si es necesario y validar la conectividad.

- Ingrese los ajustes del servidor Plaspy para que el G737 sepa dónde enviar sus datos.
- Seleccione UDP o TCP en el dispositivo si el fabricante solicita elegir el transporte.
- Configure y guarde el puerto compartido que usa Plaspy para que dispositivo y plataforma coincidan.
- Reinicie o aplique la configuración para que el dispositivo inicie un nuevo intento de conexión a Plaspy.
- Valide que el dispositivo esté reportando ubicación y eventos en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy al configurar el G737:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects
- Note that Plaspy uses the same port for all supported devices

Ingrese ya sea el dominio d.plaspy.com o la IP 54.85.159.138 durante la configuración; ambos resuelven al mismo endpoint de Plaspy y la plataforma escucha en el puerto 8888.

## Requisitos típicos antes de iniciar

- El dispositivo debe estar encendido y con suficiente carga de batería para la configuración y el reporte inicial.
- Servicio celular activo configurado en el dispositivo mediante Micro SIM o eSIM integrada donde aplique, y cobertura de red adecuada para LTE CAT-1 o conmutación a GSM.
- Acceso al método o software oficial de configuración de Gosafe, como la herramienta web del fabricante, la utilidad USB de configuración o la herramienta de programación de campo aprobada.
- Conocimiento de los identificadores del dispositivo y de las credenciales de acceso que requiera la interfaz de configuración de Gosafe.
- Confirmación previa de los ajustes de servidor Plaspy d.plaspy.com o 54.85.159.138 y del puerto 8888 antes de aplicar cambios.
- Si está disponible, asegúrese de que el firmware del dispositivo esté razonablemente actualizado o registre la versión de firmware para la resolución de problemas.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el G737 transmite posiciones, eventos de manipulación y correa, señales SOS y telemetría por su enlace celular al endpoint y puerto compartidos de Plaspy. Plaspy recibe estos mensajes y aplica detección automática de protocolo para interpretar los datos del rastreador y mostrarlos en la plataforma.

- Las ubicaciones y las correcciones GNSS se envían a través del enlace celular del dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Los eventos de manipulación, corte de correa, SOS y de zonas se reportan como alertas a Plaspy para que los supervisores puedan actuar.
- Los eventos del balizador doméstico BLE pueden incorporarse a la telemetría del dispositivo si se configuran y si el proveedor lo soporta.
- La detección automática de protocolo de Plaspy identifica el protocolo del G737, por lo que no es necesario seleccionar manualmente el protocolo en la plataforma.
- Usar el mismo puerto 8888 para todos los dispositivos simplifica la configuración del servidor y la provisión de equipos.

## Flujo de trabajo habitual de configuración

1. Acceda al método o software oficial de configuración de Gosafe para el G737 (herramienta web del fabricante, utilidad USB o herramienta de programación de campo).
2. En los ajustes de servidor del dispositivo, ingrese el dominio de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138.
3. Configure el puerto del dispositivo en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los equipos.
4. Si el dispositivo requiere elegir transporte, seleccione UDP o TCP según la preferencia del instalador o la recomendación del proveedor.
5. Guarde o aplique los cambios de configuración en la herramienta del proveedor.
6. Reinicie el G737 si las instrucciones del fabricante indican que es necesario para que los ajustes surtan efecto.
7. Verifique que el dispositivo aparezca y reporte ubicación y eventos en Plaspy después de reconectarse.

## Ejemplos de comandos o campos de configuración

Los comandos exactos de configuración o los campos de la interfaz varían según el firmware de Gosafe y la herramienta del proveedor. Algunos instaladores usan una utilidad gráfica, otros un cable de aprovisionamiento USB o una app de programación de campo. En todos los casos deberá proporcionar el dominio o la IP del servidor Plaspy y el puerto compartido de Plaspy.

En la herramienta del fabricante busque campos etiquetados como Server, Host o Reporting Server e ingrese d.plaspy.com o 54.85.159.138, y localice el campo Port para ingresar 8888. Si la herramienta requiere seleccionar transporte, elija UDP o TCP. Después de guardar, siga las indicaciones de la herramienta para reiniciar o reinitializar el dispositivo y que comience a reportar a Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de los campos de configuración o los pasos requeridos; confirme siempre las etiquetas de la interfaz del proveedor antes de aplicar ajustes.
- Elija UDP o TCP en función de la preferencia del instalador y de las recomendaciones del proveedor; Plaspy acepta ambos transportes en el puerto 8888 y maneja la detección de protocolo automáticamente.
- Ingresar el dominio d.plaspy.com es lo recomendado para operación normal; la IP 54.85.159.138 puede usarse como alternativa si no hay servicio de DNS.
- Preserve cualquier marcador de posición o campos del fabricante necesarios para la configuración celular, como entradas de APN, si su despliegue las requiere.
- Tras la configuración, monitoree el dispositivo para verificar el reporte de eventos y ubicaciones y asegurar que las alertas de manipulación y SOS se transmitan correctamente.

## Por qué usar Plaspy con esta configuración

Usar la Gosafe G737 con Plaspy brinda a agencias y supervisores una forma práctica de centralizar la ubicación, la telemetría de manipulación y eventos en una sola plataforma. La forma de tobillera del G737, su correa con evidencia de manipulación, el soporte de baliza doméstica BLE y la conectividad LTE CAT-1 proporcionan la telemetría y las señales de evento que Plaspy consume para ofrecer mapas en tiempo real, alertas e informes de cumplimiento.

To learn more about Plaspy visit https://www.plaspy.com. Please verify the latest device specific configuration instructions, firmware behavior, and manufacturer recommendations on the Gosafe website https://gosafesystem.com/ as vendor setup methods and firmware can change over time.
