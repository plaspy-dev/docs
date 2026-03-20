---
slug: /topfly/tlp1_sf/configuration
id: tlp1_sf-configuration
sidebar_label: Configuration
title: TopFly - TLP1-SF Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración y comandos SMS para integrar TopFly TLP1-SF con el servidor Plaspy y detección automática de protocolo
keywords:
  - Configuración TopFly TLP1-SF
  - Configuración inicial TopFly TLP1-SF
  - Configuración rastreador GPS TopFly
  - Compatibilidad con Plaspy
  - Ajustes servidor Plaspy
  - Guía configuración rastreador GPS
  - Configuración SMS TLP1-SF
  - Configuración rastreador de activos
  - Configuración rastreador de remolques
  - Configuración rastreador GPS solar
---

# TopFly - TLP1-SF Configuración

Esta página describe el contexto público de configuración para usar el rastreador TopFly TLP1-SF con la plataforma Plaspy. Resume los ajustes de servidor prácticos, ejemplos de comandos SMS y el flujo de trabajo típico necesario para preparar el dispositivo y que pueda reportar ubicación y eventos a Plaspy.

Plaspy se basa en ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que la información siguiente explica los elementos públicos de configuración y reproduce los comandos SMS de ejemplo publicados por TopFly.

## Resumen de la configuración

El objetivo de la configuración es preparar el TLP1-SF para que se comunique de forma confiable con Plaspy, suba ubicaciones en tiempo real y en búfer, y reporte eventos relevantes de movimiento o alarma a la plataforma. Los comandos públicos y los ajustes de servidor que se muestran a continuación son el punto de partida habitual para conectar este modelo con Plaspy.

- Configure el APN y los parámetros de red del dispositivo para que use datos móviles y GPRS para telemetría.
- Apunte el dispositivo al endpoint del servidor Plaspy para que los datos de ubicación se dirijan a la plataforma.
- Establezca el intervalo de reporte para que las actualizaciones se ajusten a sus necesidades operativas y al consumo de batería.
- Valide que el rastreador suba puntos en búfer y actualizaciones en tiempo real a Plaspy.
- Use SMS o el software del proveedor para aplicar los ajustes según las herramientas y el acceso disponibles.
- Confirme la visibilidad en Plaspy tras la configuración verificando los mensajes entrantes del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son la información pública del endpoint Plaspy que debe usar al configurar el rastreador para que pueda comunicarse con la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta el protocolo de manera automática.

## Requisitos típicos antes de la configuración

- Un rastreador TLP1-SF con batería cargada y alimentación conectada, con el montaje necesario completado.
- Una tarjeta SIM activa con datos habilitados y capacidad de SMS si usará comandos por SMS.
- Acceso a la contraseña por defecto del dispositivo (el ejemplo público de TopFly que se muestra abajo es 0000).
- Acceso al método de configuración oficial de TopFly, como comandos SMS o software del proveedor.
- Cobertura de red que soporte las bandas celulares del equipo para subidas fiables de datos.
- Un plan claro del intervalo de reporte y las reglas de eventos para evitar consumos innecesarios de batería.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TLP1-SF envía su ubicación y datos de estado a Plaspy usando el endpoint y puerto compartidos indicados más arriba. Plaspy recibe los paquetes entrantes y los vincula al registro del dispositivo interpretando su protocolo.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Los datos se envían al puerto 8888 y el dispositivo puede usar transporte UDP o TCP según la configuración.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se puede emplear el mismo puerto entre distintos dispositivos.
- Los puntos de ubicación almacenados en búfer en el rastreador se suben cuando la red está disponible.
- Las alertas de movimiento y otras notificaciones de eventos se reenvían a Plaspy para su visualización y monitoreo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de TopFly o al software del proveedor (comandos SMS, herramienta del proveedor o interfaz de instalador).
2. Ingrese el endpoint del servidor Plaspy especificando d.plaspy.com o 54.85.159.138 en los ajustes de servidor.
3. Establezca el puerto del dispositivo en 8888 como destino de telemetría.
4. Elija UDP o TCP como transporte si el equipo requiere selección del tipo de conexión.
5. Configure el APN y las credenciales APN necesarias según su operador móvil.
6. Aplique o guarde la configuración y reinicie el dispositivo si el rastreador requiere reboot para que los cambios surtan efecto.
7. Valide que el dispositivo informe a Plaspy comprobando en la plataforma la recepción de datos y las actualizaciones de ubicación recientes.

Si prefiere configurar por SMS, siga los comandos del fabricante que aparecen más abajo como alternativa al software del proveedor, respetando el orden y los marcadores donde corresponda.

## Ejemplo de comandos de configuración

TopFly publica comandos SMS para aplicar ajustes básicos en el TLP1-SF. Los comandos de ejemplo que siguen usan la contraseña por defecto 0000 y deben enviarse como mensajes SMS al dispositivo. Mantenga los marcadores (placeholders) tal como se indican.

1. Establecer la zona horaria a UTC 0
```
GMT,0000,0#
```

2. Establecer el APN y el nombre de usuario y contraseña APN opcionales
```
APN,0000,[apn],[apnu],[apnp]#
```
- [apn] es la cadena APN del operador.
- [apnu] es el nombre de usuario del APN si se requiere; de lo contrario dejar en blanco.
- [apnp] es la contraseña del APN si se requiere; de lo contrario dejar en blanco.

3. Configurar el servidor GPRS con la IP y puerto de Plaspy
```
IP,0000,54.85.159.138 8888#
```
- Este comando apunta el rastreador a Plaspy usando la IP pública y el puerto 8888.
- Puede usar d.plaspy.com en lugar de la IP si el dispositivo admite nombres de dominio.

4. Establecer el intervalo de subida/reporte a 60 segundos
```
TIMER,0000,60:60:0:0#
```
- El formato de TIMER es específico del dispositivo; este ejemplo sigue la muestra del fabricante para un intervalo de 60 segundos.
- Respete el orden de los comandos al realizar la configuración inicial.

Estos comandos son los ejemplos públicos de SMS de TopFly para la configuración inicial. Reemplace los marcadores con los valores de su operador y confirme que la contraseña usada coincide con el estado del equipo. Si cambia la contraseña del dispositivo, use la nueva contraseña en los comandos posteriores.

## Notas de configuración

- Los comandos SMS de ejemplo usan la contraseña de fábrica 0000 según la documentación pública de TopFly. Cambie la contraseña cuando sea posible y actualice los comandos futuros en consecuencia.
- Las versiones de firmware y las revisiones de hardware pueden modificar la sintaxis de los comandos o las funcionalidades soportadas. Confirme el formato exacto de comandos para la versión de firmware de su equipo.
- Elija UDP o TCP según sus preferencias de despliegue y el comportamiento de la red; Plaspy soporta ambos y detectará el protocolo automáticamente.
- La configuración por SMS es práctica en campo, pero las herramientas de proveedor pueden ofrecer un flujo de aprovisionamiento masivo más rápido.
- Plaspy utiliza el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente, por lo que el puerto 8888 es de uso universal entre los rastreadores configurados.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el TopFly TLP1-SF ofrece una forma sencilla de centralizar los datos de rastreo de equipos alimentados por energía solar y aprovechar la detección automática de protocolos y el endpoint compartido de la plataforma. Los ajustes públicos y los comandos SMS mostrados aquí permiten a instaladores y administradores apuntar los dispositivos a Plaspy y comenzar a recibir actualizaciones de ubicación en tiempo real y en búfer.

Para conocer más sobre Plaspy y las características de la plataforma visite https://www.plaspy.com. Para comportamientos específicos de firmware del dispositivo, referencias completas de comandos y las instrucciones más recientes del fabricante, verifique la documentación en el sitio de TopFly https://www.topflytech.com/ ya que la documentación del proveedor puede cambiar con el tiempo.
