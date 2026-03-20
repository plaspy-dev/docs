---
slug: /carscop/cc_688/configuration
id: cc_688-configuration
sidebar_label: Configuration
title: Carscop - CC-688 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Carscop CC-688 configuration and Plaspy compatibility
keywords:
  - Carscop CC-688 configuration
  - Carscop CC-688 setup
  - CC-688 Plaspy configuration
  - Carscop tracker setup
  - CC-688 server configuration
  - CC-688 GPS tracker configuration
  - Plaspy tracker configuration
  - vehicle tracker setup
  - fleet management GPS configuration
  - car sharing tracker setup
---

# Carscop - CC-688 Configuration

This page documents the public configuration context for using the Carscop CC-688 T Box with Plaspy. It describes the shared Plaspy server settings and the practical setup steps commonly used to point the CC-688 at Plaspy so that location, telemetry and control data are delivered to the platform. Use this guide alongside the device manufacturer documentation for full installation and safety details.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side steps can vary by firmware revision, hardware variant, installation type, and vendor configuration tools. Where the CC-688 supports SMS parameter programming, example SMS commands are included below based on publicly available setup strings; confirm any device behavior against Carscop documentation and your firmware version.

## Configuration Overview

The goal of configuration is to prepare the CC-688 so it reliably communicates with Plaspy and appears in your Plaspy fleet with the expected telemetry and control capabilities. For CC-688 units, this typically means ensuring cellular connectivity is operational, APN and server parameters are set, and the device is allowed to keep a persistent connection to the platform.

- Set APN and network credentials so the CC-688 can use cellular data and reach Plaspy.
- Configure the device to report to Plaspy server endpoint and port so telemetry is delivered.
- Validate transport selection and connectivity so the unit is visible in Plaspy.
- Enable persistent connection modes or keepalive settings so the tracker remains online.
- Verify CANBUS and OBD telemetry forwarding if vehicle telemetry is required for your workflows.

## Plaspy Server Settings

- Server domain d.plaspy.com should be used where a hostname is accepted by the device.
- Server IP 54.85.159.138 can be used when the device requires an explicit IP address.
- Port 8888 is the port used by Plaspy for all supported devices and must be set on the tracker.
- Transport support for UDP or TCP depending on device configuration options; choose the transport required by your firmware or installation.
- Plaspy performs automatic protocol detection so the platform can accept connections using supported tracker protocols without per device protocol selection.

Note: Plaspy uses the same port across supported devices and will automatically detect the tracker protocol when the device connects to the server endpoint.

## Typical Requirements Before Setup

- Device powered and installed with appropriate antennas connected and vehicle wiring completed by a qualified installer.
- Active SIM card with data enabled and correct APN credentials for the mobile operator.
- Access to the Carscop configuration method you will use such as SMS parameter programming or the vendor configuration tool.
- The known device password for SMS configuration (the sample default password in public commands is 123456).
- Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) available to enter into the device configuration.
- A method to confirm device reporting such as a Plaspy account where you can view incoming telemetry.

## How This Tracker Connects to Plaspy

When configured, the CC-688 forwards GNSS position, vehicle telemetry and event data to the shared Plaspy server endpoint and port so fleet managers can view live location and control devices through the platform. Plaspy receives data streams over the configured transport and maps device messages to the platform automatically.

- The tracker is configured to report to the shared Plaspy server endpoint and port using the device server or IP parameter.
- The CC-688 delivers GNSS location and movement data to Plaspy for real time tracking and history playback.
- CANBUS and OBD II telemetry from the CC-688 is forwarded to Plaspy for engine and sensor data where available.
- Event and alarm signals (for example door, ignition, or impact alerts) are sent to Plaspy for immediate notification and logging.
- The device can maintain a persistent online state so Plaspy receives timely updates and remote control commands.

## Common Configuration Workflow

1. Access the official Carscop configuration method such as SMS parameter commands or the Carscop configuration tool recommended by the installer.
2. Enter the Plaspy server information using either the domain d.plaspy.com or the IP 54.85.159.138 in the device server field.
3. Set port 8888 as the server port; Plaspy uses the same port for all devices.
4. Choose UDP or TCP transport if the device requires explicit transport selection.
5. Apply or save the configuration on the device and send any required SMS commands if using SMS configuration.
6. Restart or power cycle the device if required by the manufacturer to apply new network parameters.
7. Validate that the device reports to Plaspy by confirming the unit appears and sends telemetry to your Plaspy account or by checking device connection logs.

## Example Configuration Commands

The CC-688 supports SMS based parameter programming. The following example commands are based on public configuration strings. The device default password used in these examples is 123456. Send these commands from an authorized phone number to the device when SMS configuration is required. Preserve placeholders as shown.

- Optional initial or factory reset command
```text
RESET*123456
```

- Set the time zone to UTC
```text
TIMEZONE*123456*+00
```

- Set the APN for your mobile operator
```text
APN*123456*{{apn}}
```
Explanation: replace {{apn}} with your operator APN string.

- Set APN username and password when required by the operator
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```
Explanation: replace {{apnu}} with the APN username and {{apnp}} with the APN password. Only required if your operator requires credentials.

- Set the GPRS server to Plaspy using the IP and port
```text
IP*123456*54.85.159.138,8888
```
Note: this command sets the Plaspy server IP and port. If your firmware supports hostnames in the IP/server field, consult Carscop documentation to use d.plaspy.com instead of the numeric IP.

- Keep the tracker online with keepalive behavior
```text
KEEPONLINE*123456
```
Explanation: this command requests persistent online behavior so the unit maintains a connection for timely reporting.

Important: the command order above follows the typical public setup sequence. Use the reset command only when needed for initial setup or to clear prior settings, and confirm any required reboot steps in the device documentation.

## Configuration Notes

- Firmware and hardware revisions can change available SMS commands and parameter names; always verify commands against the installed firmware version.
- The CC-688 supports SMS based configuration as shown here, and vendor software or provisioning tools may also be available for bulk or OTA parameter changes.
- Choose UDP or TCP based on installer guidance and device firmware; Plaspy supports both and will auto detect the protocol on connection.
- Change the device default password from the sample default (123456) after initial setup when possible to improve security.
- Setting the server by IP is reliable for devices that do not resolve hostnames; where hostname support exists, d.plaspy.com can be used instead of the numeric IP.

## Why Use Plaspy with This Configuration

Using the CC-688 with Plaspy provides an integrated path to real time location and vehicle telemetry for fleet, rental and car sharing operations. The combination of vehicle telemetry forwarding, remote actuator control and Plaspy platform features helps operators monitor assets, respond to alarms, and perform remote control actions from a single fleet platform.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. Device specific configuration methods and firmware behavior can change over time, so please verify the latest setup and command references on the manufacturer site http://www.carscop.com/ before you deploy.
