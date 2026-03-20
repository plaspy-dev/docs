---
slug: /supermate/d10/configuration
id: d10-configuration
sidebar_label: Configuration
title: Supermate - D10 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Supermate D10 con Plaspy, ajustes de servidor y flujo de instalación
keywords:
  - Configuración Supermate D10
  - Instalación Supermate D10
  - Configuración Plaspy
  - Configuración rastreador GPS
  - Configuración servidor D10
  - Configuración seguimiento de vehículos
  - Integración plataforma rastreadores
  - Configuración seguimiento en tiempo real
  - Configuración geocercas
  - Configuración alerta SOS
---

# Supermate - Configuración D10

Esta página describe el contexto público de configuración para usar el rastreador GPS Supermate D10 con Plaspy. Se enfoca en los ajustes del servidor, los requisitos habituales y los pasos prácticos necesarios para apuntar el dispositivo a Plaspy y que el rastreador sea visible en la plataforma. El contenido está pensado para usuarios técnicos, instaladores y gestores de flota que preparan el D10 para su operación con Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los rastreadores soportados y detecta automáticamente el protocolo del dispositivo una vez que el equipo apunta al endpoint de Plaspy. Los pasos exactos por parte del fabricante para el Supermate D10 pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que debe usar esta guía junto con la documentación oficial de Supermate y sus procedimientos de instalación.

## Resumen de la configuración

Configurar el Supermate D10 para Plaspy prepara la unidad para enviar su ubicación y eventos a un único endpoint de Plaspy, de modo que los dispositivos aparezcan en la plataforma. El diseño compacto del D10, el seguimiento en tiempo real, las geocercas y la función SOS lo hacen útil para múltiples casos; la configuración garantiza que el dispositivo reporte correctamente a Plaspy para monitoreo y alertas.

- Apuntar el dispositivo al servidor de Plaspy para que las actualizaciones de ubicación lleguen a la plataforma.
- Elegir el protocolo de transporte y puerto compatibles con el dispositivo y con Plaspy.
- Validar la conectividad y que el D10 esté enviando datos tras la configuración.
- Habilitar o probar el reporte de eventos como alertas de geocerca y SOS si es necesario.
- Confirmar la visibilidad y la correcta identificación del equipo dentro de Plaspy.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor al configurar el Supermate D10 para que reporte a Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- El Supermate D10 debe estar alimentado y accesible para el instalador o la herramienta de configuración.
- Si el rastreador requiere conectividad celular, asegúrese de que haya una SIM válida con datos móviles y cobertura GSM instalada y activa.
- Tener acceso al método oficial de configuración de Supermate, ya sea software del fabricante, comandos SMS o cable de configuración según lo provea el vendedor.
- Contar con la información básica de identificación del dispositivo lista para el registro en Plaspy si su cuenta o flujo de instalación lo requiere.
- Un plan de pruebas para validar actualizaciones de ubicación, activación de geocercas y comportamiento SOS después de configurar el equipo.

## Cómo se conecta este rastreador a Plaspy

El Supermate D10 envía su ubicación y datos de eventos al endpoint del servidor Plaspy para que el dispositivo pueda ser rastreado y administrado en la plataforma. Una vez configurado para usar el endpoint y el puerto de Plaspy, la plataforma recibirá la telemetría del rastreador y la pondrá a disposición para monitoreo, alertas e informes.

- El D10 se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP del servidor.
- Los datos se envían a Plaspy en el puerto 8888 que Plaspy utiliza para todos los dispositivos.
- El transporte puede configurarse como UDP o TCP según las opciones del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos.
- Una vez que el reporte inicia, las actualizaciones de ubicación, eventos de geocerca y alertas SOS serán visibles en Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración Supermate suministrado por el fabricante o su instalador.
2. En los ajustes de servidor o APN del dispositivo introduzca el servidor de Plaspy como d.plaspy.com o 54.85.159.138.
3. Configure el puerto del servidor en 8888 para que coincida con el puerto de escucha de Plaspy.
4. Elija UDP o TCP si el equipo le solicita seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración en la herramienta Supermate o mediante la interfaz del dispositivo.
6. Reinicie el D10 si las instrucciones del fabricante requieren un reinicio para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la llegada de datos y la visibilidad del equipo en la plataforma.

## Ejemplos de comandos de configuración

El Supermate D10 puede configurarse a través de las herramientas oficiales del fabricante o mediante métodos por comando. Las cadenas exactas SMS, comandos seriales o pasos en utilidades dependen del firmware y las herramientas del proveedor y no son universales para todas las unidades D10. Consulte la documentación de Supermate o la herramienta del proveedor para la sintaxis de comandos precisa para su versión de firmware.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los pasos exactos de configuración y los nombres de menú; siempre verifique con el manual del dispositivo.
- Algunos instaladores prefieren UDP por menor sobrecarga y otros eligen TCP por su entrega fiable; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Las variaciones de mercado y el comportamiento de los operadores pueden afectar la conectividad móvil; asegúrese de que la SIM y el APN estén configurados según los requisitos del operador local.
- La detección automática de protocolo de Plaspy reduce la necesidad de seleccionar un protocolo en la plataforma, pero el dispositivo debe apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si su método de configuración incluye marcadores de posición como valores de APN o credenciales de usuario, manténgalos y siga la guía del fabricante para reemplazarlos correctamente.

## Por qué usar Plaspy con esta configuración

Configurar el Supermate D10 para que reporte a Plaspy ofrece una forma directa de obtener visibilidad en tiempo real y monitoreo de eventos en sus activos. Para organizaciones que necesitan supervisión operativa, alertas por geocerca y actualizaciones de ubicación confiables, dirigir el D10 a Plaspy centraliza los datos entrantes y permite flujos de trabajo de rastreo consistentes.

Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los pasos específicos más recientes del dispositivo, notas de firmware y la guía del fabricante en el sitio oficial de Supermate http://www.gps-summit.com/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
