---
slug: /aoya/t2/configuration
id: t2-configuration
sidebar_label: Configuration
title: AoYa - T2 Configuration
sidebar_class_name: menu_item_tracker
description: Configura un rastreador AoYa T2 para Plaspy con ajustes públicos de servidor y guía de instalación general
keywords:
  - Configuración AoYa T2
  - Configuración servidor AoYa T2
  - Configuración AoYa T2 para Plaspy
  - Configuración software AoYa T2
  - Configuración plataforma GPS AoYa T2
  - Configuración APN AoYa T2
  - Guía de instalación AoYa T2
  - Configuración seguimiento flota AoYa T2
  - Integración dispositivo AoYa T2
  - Integración AoYa T2 con Plaspy
---

# AoYa - Configuración del T2

Esta página ofrece la información pública necesaria para usar el rastreador AoYa T2 con Plaspy. Explica los ajustes de servidor compartidos que emplea Plaspy, resume el enfoque típico de configuración en el dispositivo y destaca los pasos clave para preparar el T2 y que reporte correctamente a la plataforma. La guía se concentra en información pública y buenas prácticas generales, no en comandos propietarios o detalles internos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AoYa T2 admite métodos comunes de configuración como SMS o software del proveedor para parámetros de APN y servidor; esta página resume esos patrones públicos y recomienda verificar los procedimientos específicos con la documentación oficial de AoYa.

## Resumen de la configuración

El proceso de configuración consiste principalmente en asegurar que el AoYa T2 pueda alcanzar Plaspy y que la plataforma pueda interpretar sus mensajes. Usted deberá apuntar el dispositivo al endpoint del servidor de Plaspy, confirmar el transporte correcto y validar que el dispositivo aparezca en la plataforma Plaspy.

- Prepare el rastreador para enviar datos al endpoint del servidor de Plaspy para que la plataforma reciba mensajes de ubicación y estado.
- Configure parámetros de red como el APN usando el método soportado por el fabricante.
- Seleccione el modo de transporte que soporte el dispositivo (UDP o TCP) y asegúrese de que coincida con la configuración del rastreador.
- Valide la conectividad y confirme que el dispositivo sea visible en Plaspy tras la configuración.
- Mantenga a mano la documentación del fabricante, ya que los pasos exactos dependen del firmware y las herramientas del proveedor.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador cuando este se conecte a la plataforma.

## Requisitos típicos antes de la configuración

- Un rastreador AoYa T2 encendido y accesible con una SIM operativa y acceso a la red móvil compatible con el dispositivo
- Acceso al método de configuración de AoYa proporcionado por el fabricante, como comandos SMS o software del proveedor
- Información del APN del operador para la SIM del rastreador para que se establezca la conexión de datos móviles
- Una cuenta en Plaspy o acceso al portal para registrar y ver el dispositivo una vez que comience a reportar
- Herramientas básicas para verificar la conectividad, como la posibilidad de observar la actividad reportada en Plaspy o monitorear tráfico de red cuando esté permitido
- Cobertura de red confirmada en el lugar de instalación para permitir que el rastreador se conecte a la red GPRS

## Cómo se conecta este rastreador a Plaspy

El AoYa T2 se configura para enviar su telemetría al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda gestionar automáticamente el análisis del protocolo y mostrar ubicación y estado en el panel. La configuración apunta el dispositivo a Plaspy y garantiza que la ruta de red esté disponible.

- El rastreador se configura para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138
- Todos los dispositivos reportan en el mismo puerto 8888 que Plaspy usa para conexiones entrantes
- El transporte puede configurarse en UDP o TCP según el soporte del dispositivo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes sin necesidad de registrar protocolos por dispositivo
- Una vez conectado, Plaspy recibe mensajes de ubicación y operativos y muestra el dispositivo en la plataforma para su supervisión

## Flujo de configuración típico

1. Acceda al método oficial de configuración de AoYa o al software indicado por el fabricante.
2. Ingrese el endpoint del servidor de Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 en los ajustes de servidor del rastreador.
3. Configure el puerto del servidor en 8888 para dirigir el tráfico correctamente hacia Plaspy.
4. Elija UDP o TCP si el rastreador requiere selección explícita del transporte.
5. Guarde o aplique la configuración usando el método proporcionado por AoYa.
6. Valide que el dispositivo reporte a Plaspy comprobando la lista de dispositivos y la actividad en su cuenta de Plaspy.

Si el dispositivo soporta configuración vía SMS o software del proveedor, utilice esos canales oficiales para aplicar los ajustes de servidor, APN y transporte en lugar de métodos improvisados.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la forma de aplicar los ajustes; confirme siempre los pasos exactos para su unidad con la documentación del fabricante.
- Los instaladores deben elegir UDP o TCP según la confiabilidad de la red y la preferencia de instalación; Plaspy soporta ambos transportes y aceptará reportes en el puerto compartido.
- El T2 comúnmente usa SMS o herramientas del proveedor para configurar APN, servidor y transporte; trate los flujos por SMS como un método soportado, pero no dependa de comandos no documentados.
- Variaciones de mercado y firmware personalizado de revendedores pueden alterar los flujos de configuración, por lo que es importante verificar el comportamiento en el dispositivo real antes de desplegar a gran escala.
- Después de aplicar los ajustes de servidor, permita tiempo para que el dispositivo se registre en la red y aparezca en Plaspy antes de dar por concluida la instalación.

## Por qué usar Plaspy con esta configuración

Usar el AoYa T2 con Plaspy ofrece a las organizaciones una forma sencilla de obtener visibilidad de la ubicación y la actividad de los vehículos, aprovechando la capacidad de la plataforma para aceptar reportes entrantes en un endpoint compartido. Apuntar el T2 a los ajustes públicos de servidor de Plaspy reduce la complejidad por dispositivo, ya que Plaspy escucha en el mismo puerto para todos los rastreadores compatibles y detecta automáticamente el protocolo.

Para conocer más sobre Plaspy y cómo la plataforma gestiona la conectividad de dispositivos y la supervisión de flotas visite https://www.plaspy.com. Para métodos de configuración específicos, detalles de firmware y comandos oficiales más actuales consulte la documentación del fabricante en http://www.aoyagps.com/ ya que el comportamiento del hardware y del firmware puede cambiar con el tiempo.
