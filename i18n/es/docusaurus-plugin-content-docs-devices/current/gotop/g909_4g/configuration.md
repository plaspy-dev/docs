---
slug: /gotop/g909_4g/configuration
id: g909_4g-configuration
sidebar_label: Configuration
title: GOTOP - G909-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para integrar el GOTOP G909-4G con Plaspy, con ajustes de servidor y pasos prácticos de instalación
keywords:
  - Configuración GOTOP G909-4G
  - Instalación GOTOP G909-4G
  - GOTOP G909-4G Plaspy
  - configuración rastreador GOTOP
  - configuración servidor G909-4G
  - configuración Plaspy G909-4G
  - configuración rastreador GPS GOTOP
  - instalación rastreador vehicular Plaspy
  - seguimiento de flota G909-4G
  - configuración rastreador de activos
---

# GOTOP - Configuración G909-4G

Esta página documenta el contexto público de configuración para usar el GOTOP G909-4G Mini Asset GPS Tracker con Plaspy. Resume los valores de servidor compartidos que Plaspy requiere, los prerrequisitos típicos que conviene verificar antes de configurar el equipo y un flujo de trabajo práctico para aplicar los parámetros necesarios para que el G909-4G se comunique de forma fiable con la plataforma Plaspy.

Plaspy utiliza un único punto de conexión y puerto compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos y herramientas de configuración del fabricante para el G909-4G pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las utilidades del proveedor; por eso esta guía se centra en los ajustes públicos a nivel de plataforma y en las acciones comunes que debe realizar antes y durante la integración.

## Resumen de la configuración

El objetivo de la configuración es preparar el G909-4G para enviar datos de ubicación, eventos y telemetría a Plaspy, de modo que los dispositivos sean visibles y gestionables dentro de la plataforma. Eso implica configurar el rastreador para que informe al endpoint de Plaspy y confirmar que el dispositivo puede acceder a la red y subir datos almacenados cuando recupere conexión.

- Configure el dispositivo para usar el dominio o la IP del servidor de Plaspy y el puerto compartido para que las subidas sean aceptadas y procesadas.
- Seleccione el protocolo de transporte (UDP o TCP) si el rastreador requiere una elección explícita, coincidiendo con los transportes que soporta Plaspy.
- Valide la conectividad celular y que el rastreador pueda realizar un envío inicial de datos a Plaspy.
- Confirme el reporte de datos comprobando que el dispositivo aparece en Plaspy tras la configuración y que se ven posiciones recientes o registros de eventos.
- Guarde y aplique los ajustes en el dispositivo, reinícielo si es necesario y verifique que reanuda el envío de datos.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos

Estos valores son los ajustes públicos de servidor que utiliza Plaspy; todos los dispositivos compatibles reportan al mismo puerto y Plaspy identificará el protocolo del dispositivo de forma automática.

## Requisitos típicos antes de la configuración

- Una unidad G909-4G alimentada y accesible con capacidad para aceptar cambios de configuración mediante el método oficial del fabricante.
- Una tarjeta SIM 4G activa con plan de datos instalada en el dispositivo según lo requiera el hardware y los operadores locales.
- Cobertura celular fiable en el sitio de instalación para permitir que el equipo se conecte y envíe datos al servidor de Plaspy.
- Acceso a la herramienta de configuración GOTOP, comandos SMS u otra interfaz de configuración suministrada por el fabricante para introducir los ajustes de servidor.
- Una cuenta de Plaspy o acceso proporcionado por su administrador para verificar que el dispositivo aparece después de la configuración.
- Conocimiento de la versión de firmware del dispositivo y las notas de la versión cuando estén disponibles, ya que los comandos y menús pueden diferir.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el G909-4G envía posiciones GNSS, eventos de sensores y telemetría por datos celulares al punto de conexión y puerto compartidos de Plaspy. Plaspy ingiere esos paquetes, detecta automáticamente el protocolo del rastreador y muestra el dispositivo en los mapas, alertas y vistas de historial de la plataforma.

- El dispositivo se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- El transporte puede ser UDP o TCP según las opciones de configuración del G909-4G y la preferencia del instalador.
- Las posiciones GNSS, eventos de aceleración y mensajes de alarma se suben a Plaspy para supervisión en tiempo real y reproducción histórica.
- El almacenamiento interno del G909-4G guarda datos durante pérdidas de señal y sube automáticamente los registros en caché al servidor de Plaspy cuando se restablece la conectividad.
- Plaspy recibe los paquetes entrantes, detecta el protocolo del rastreador y asigna el dispositivo al parser y registro de vehículo correspondientes.

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración GOTOP para el G909-4G (herramienta del fabricante, conjunto de comandos SMS o utilidad de configuración web/USB).
2. Localice la sección de ajustes de servidor o de reporte principal en la interfaz de configuración del dispositivo.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 como destino del dispositivo.
4. Establezca el puerto del servidor en 8888 según lo requiere Plaspy.
5. Elija UDP o TCP si el G909-4G necesita seleccionar el transporte; Plaspy admite ambos.
6. Aplique o guarde los cambios de configuración en la herramienta del dispositivo y súbalos al rastreador.
7. Reinicie el dispositivo si el fabricante recomienda un reboot tras la configuración.
8. Valide que el dispositivo reporta a Plaspy comprobando la aparición de posiciones recientes o datos de eventos en su cuenta de Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para el G909-4G dependen de la herramienta de configuración GOTOP o del conjunto de comandos SMS y del firmware del dispositivo. Los métodos pueden incluir una utilidad GUI, configuración por USB o serie, o comandos SMS. Dado que el fabricante define las cadenas concretas, siga la documentación de GOTOP para obtener los comandos precisos.

Acciones públicas comunes que realizará al aplicar comandos o ajustes:
- Establecer el dominio o IP del servidor a d.plaspy.com o 54.85.159.138
- Fijar el puerto de reporte en 8888
- Seleccionar el transporte como UDP o TCP si es necesario
- Guardar y reiniciar el dispositivo para aplicar los cambios

Si dispone de la lista de comandos SMS o CLI de GOTOP proporcionada por el fabricante, use la sintaxis indicada y reemplace los valores de servidor y puerto por los ajustes de Plaspy arriba. Mantenga marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} si aparecen en ejemplos del fabricante y complételos con las credenciales APN de su operador SIM.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y los elementos de menú disponibles. Verifique los comandos frente a la documentación de GOTOP para el firmware de su equipo.
- Elija UDP o TCP según su red y las necesidades de la instalación; Plaspy soporta ambos y aceptará datos en el puerto 8888 para todos los dispositivos.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente, el uso consistente de d.plaspy.com o de la IP proporcionada y del puerto 8888 simplifica despliegues con múltiples equipos.
- Confirme la configuración de APN y del operador de la SIM al configurar la conectividad celular; un APN faltante o incorrecto es una causa común de fallos de conexión.
- Si usa configuración vía SMS, tenga en cuenta que los mensajes pueden demorarse o ser bloqueados por el operador móvil durante la provisión.

## Por qué usar Plaspy con esta configuración

Integrar el GOTOP G909-4G con Plaspy ofrece un camino directo hacia la localización en tiempo real, el reporte de eventos y la gestión remota de dispositivos para monitoreo de flota y activos. El enfoque de servidor compartido y la detección automática de protocolos de Plaspy reducen la necesidad de configurar parsers por dispositivo, permitiendo que los administradores se concentren en la escala del despliegue y los casos operativos, en lugar del enrutamiento de red por modelo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los comandos específicos más recientes del dispositivo GOTOP, notas de firmware y detalles de hardware verifique la documentación actual del fabricante en https://www.gotop.cc/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
