---
slug: /autofon/alpha_beacon_2xl/configuration
id: alpha_beacon_2xl-configuration
sidebar_label: Configuration
title: AutoFon - Alpha-Beacon 2XL Configuration
sidebar_class_name: menu_item_tracker
description: Configure el AutoFon Alpha-Beacon 2XL para usar con servidores Plaspy y guía pública de configuración
keywords:
  - Configuración AutoFon Alpha-Beacon 2XL
  - Configuración rastreador GPS AutoFon
  - Alpha-Beacon 2XL Plaspy
  - Configuración rastreador Plaspy
  - Configuración servidor rastreador GPS
  - Configuración seguimiento de flotas
  - Configuración baliza de activos
  - Integración rastreo de vehículos
  - Integración AvtoFon KSA
  - Guía de configuración Alpha-Beacon
---

# AutoFon - Configuración del Alpha-Beacon 2XL

Esta página documenta el contexto público de configuración para usar el AutoFon Alpha-Beacon 2XL con la plataforma de monitoreo Plaspy. Resume los ajustes prácticos de servidor y el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, y explica qué debe verificar en el equipo y con el fabricante antes de la integración. El contenido se centra en los elementos de configuración públicos y la información compartida del servidor Plaspy que deberá ingresar al configurar el rastreador.

Plaspy utiliza configuraciones de servidor compartidas entre todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que ofrezca AutoFon. Verifique siempre las instrucciones del fabricante si encuentra opciones específicas del dispositivo o diferencias en la sintaxis de los comandos.

## Resumen de la configuración

Preparar un Alpha-Beacon 2XL para usar con Plaspy se centra en configurar el rastreador para que reporte por GPRS o SMS al endpoint de Plaspy, validar que los paquetes lleguen y habilitar la visibilidad en la interfaz de Plaspy. Los siguientes puntos resumen los objetivos prácticos del proceso de configuración.

- Configurar el dispositivo para que reporte al endpoint del servidor Plaspy y así la telemetría y la posición lleguen a la plataforma.
- Verificar los ajustes de transporte y que el dispositivo use UDP o TCP según lo que soporte el firmware.
- Confirmar que la eSIM integrada o la ruta de conectividad esté activa y que el dispositivo pueda enviar mensajes GPRS y SMS.
- Validar los reportes con posiciones de prueba y revisar el comportamiento de reintentos y de la caja negra para paquetes no enviados.
- Asegurarse de que el dispositivo aparezca en Plaspy y que alertas como SOS se entreguen según lo esperado.

## Ajustes públicos del servidor Plaspy

Al configurar el Alpha-Beacon 2XL para Plaspy, use los siguientes ajustes públicos de servidor exactamente como se muestran:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según lo requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 es el puerto compartido para los rastreadores compatibles.

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado con batería interna cargada o conectado según la guía del instalador.
- eSIM integrada activa y aprovisionada con saldo de datos o habilitada para reporting por GPRS y SMS.
- Acceso a los métodos de configuración del fabricante AutoFon, como la cuenta AvtoFon KSA, portal web, app móvil o la interfaz de comandos por SMS.
- Cobertura celular disponible para GPRS o SMS en la ubicación de instalación.
- La información del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) a mano para ingresarla en la configuración del dispositivo.
- Un método para reiniciar el rastreador o forzar un reporte de prueba después de la configuración para validar la conectividad.

## Cómo se conecta este rastreador a Plaspy

El Alpha-Beacon 2XL reporta ubicación y telemetría a Plaspy utilizando los canales de reporte que AutoFon soporta. En una integración típica, el rastreador se configura para enviar paquetes periódicos y por eventos al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar ubicación en tiempo real y alertas.

- Reporte principal por GPRS al endpoint de Plaspy en d.plaspy.com puerto 8888.
- Reporte por SMS como canal de respaldo para alertas críticas o cuando GPRS no esté disponible.
- La caja negra interna almacena paquetes no enviados y el dispositivo reintenta el envío hasta que sean entregados a Plaspy.
- Alertas SOS y otros mensajes de evento se reenvían a los sistemas de monitoreo una vez que Plaspy los recibe.
- Plaspy detecta automáticamente el protocolo del dispositivo y mapea los mensajes entrantes al perfil correcto del rastreador.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de AutoFon para el Alpha-Beacon 2XL (portal AvtoFon KSA, app móvil o interfaz SMS/herramienta de configuración).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en el campo de dirección del servidor del rastreador.
3. Establezca el puerto del servidor en 8888 como puerto de destino para los reportes.
4. Seleccione UDP o TCP como transporte si el dispositivo le solicita elegir un protocolo.
5. Aplique o guarde la configuración en la herramienta del fabricante y envíe los ajustes al dispositivo.
6. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requieren para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy enviando una posición de prueba o esperando el siguiente reporte programado y confirmando la recepción en Plaspy.

## Ejemplos de comandos de configuración

El método de configuración del Alpha-Beacon 2XL puede variar según el firmware y dependiendo de si usa el portal AvtoFon KSA, la app móvil o cadenas de comandos por SMS. No se proporciona un conjunto público universal de comandos en esta página; siga las instrucciones de AutoFon o utilice la interfaz oficial de configuración. Si administra el rastreador mediante comandos SMS o una utilidad local de configuración, ingrese la dirección del servidor Plaspy d.plaspy.com o 54.85.159.138 y configure el puerto 8888, seleccionando UDP o TCP cuando el dispositivo lo solicite.

Si dispone de ejemplos de comandos proporcionados por el fabricante o una sintaxis SMS de AutoFon, conserve esos comandos y su orden exacta al aplicarlos. Los marcadores de posición como {{apn}} o {{apnu}} que aparezcan en la documentación del fabricante deben mantenerse como marcadores hasta reemplazarlos por sus credenciales de red cuando sea necesario.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las etiquetas de menú, la sintaxis de los comandos o las ubicaciones donde se ingresan los valores de servidor y puerto. Consulte la documentación actual del AutoFon Alpha-Beacon 2XL cuando sea posible.
- Elija UDP o TCP según la opción que ofrezca el firmware del rastreador; Plaspy acepta ambos transportes y realiza detección automática del protocolo al recibir los mensajes.
- Debido a que el Alpha-Beacon 2XL incluye una eSIM integrada, confirme que el dispositivo muestre un enlace de datos activo en el portal del fabricante antes de probar el servidor.
- El rastreador soporta reporte por SMS como respaldo; si depende de comandos SMS para la configuración, verifique la sintaxis con la documentación de AutoFon.
- Recuerde que Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles, lo que simplifica la entrada del servidor entre distintos modelos de rastreadores.

## Por qué usar Plaspy con esta configuración

Integrar el Alpha-Beacon 2XL con Plaspy aporta seguimiento resiliente y de bajo mantenimiento a su flujo de monitoreo. La larga autonomía de la batería del dispositivo, su carcasa IP67 sellada, la eSIM integrada y la lógica de reintentos lo hacen adecuado para despliegues de larga duración y de baja intervención. Apuntar el rastreador a Plaspy ofrece visibilidad centralizada para ubicación en tiempo real, alertas SOS y telemetría histórica en un único entorno de monitoreo.

Para obtener más información sobre Plaspy y las funcionalidades de la plataforma, visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante del Alpha-Beacon 2XL, verifique la información actual en el sitio oficial de AutoFon https://www.autofon.ru/ ya que las especificaciones y procesos de configuración del fabricante pueden cambiar con el tiempo.
