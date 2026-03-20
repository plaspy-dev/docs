---
slug: /thingsys/ts_v6w/configuration
id: ts_v6w-configuration
sidebar_label: Configuration
title: ThingSys - TS-V6W Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for ThingSys TS V6W to connect with Plaspy using shared server settings and SMS GPRS commands
keywords:
  - ThingSys TS V6W configuration
  - TS V6W setup Plaspy
  - ThingSys TS V6W server configuration
  - TS V6W GPS tracker setup
  - TS V6W SMS configuration
  - Plaspy tracker integration
  - vehicle tracking TS V6W
  - TS V6W GPRS configuration
  - ThingSys tracker configuration
  - GPS tracker setup Plaspy
---

# ThingSys - TS-V6W Configuration

This page provides the public configuration context for using the ThingSys TS-V6W vehicle GPS tracker with Plaspy. It summarizes the practical server settings and the common setup steps you can use to point a TS-V6W to Plaspy for real time tracking, alarm forwarding, and fleet monitoring. Where available the device SMS and GPRS configuration commands are included as publicly documented examples.

Plaspy uses shared server settings for all supported devices and automatically detects the tracker protocol when a device connects. Manufacturer side setup steps can differ by firmware version, hardware revision, installation type, or vendor configuration tools, so treat the commands here as a public reference and verify device-specific details with ThingSys documentation when necessary.

## Configuration Overview

The goal of this configuration is to prepare the TS-V6W to send location and event data to Plaspy reliably over GPRS or SMS, validate connectivity, and enable visibility in the platform. The TS-V6W supports SMS and GPRS configuration methods and can be pointed to Plaspy’s shared server settings for continuous tracking.

- Configure the device network APN and credentials so the tracker can access mobile data.
- Set the tracker server address and port to the Plaspy endpoint so data is sent to Plaspy.
- Choose UDP or TCP transport on the device if required by the firmware.
- Validate connectivity and confirm the device appears in Plaspy with live position or heartbeat messages.
- Use manufacturer SMS commands for remote configuration when local software or serial access is not available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport can be UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered TS-V6W with installer access to its wiring and power source.
- An active SIM card with a data plan and SMS capability configured with the correct APN for the mobile operator.
- Ability to send SMS commands to the device or access to the manufacturer configuration software as provided by ThingSys.
- Knowledge of the device password if SMS commands require authentication (the sample configuration below uses the default password shown in the public commands).
- A Plaspy account and access to the Plaspy platform to validate that the device is reporting after configuration.

## How This Tracker Connects to Plaspy

The TS-V6W is configured to report location and event messages to the Plaspy server endpoint and port so the platform can display live positions, raise alarms, and archive route history. Plaspy receives GPRS trace tracking or SMS messages from the tracker and converts raw telemetry into usable fleet data.

- Device sends position and alarm messages to the Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker can use either UDP or TCP transport to reach port 8888; Plaspy will accept either and detect the tracker protocol automatically.
- Events such as ignition state, overspeed, vibration, and other alerts are forwarded into Plaspy for real time alerts and reporting.
- Heartbeat and status messages allow Plaspy to monitor device availability and connectivity from the TS-V6W.
- After successful configuration, the device should appear in Plaspy with live updates or recent telemetry within the platform UI.

## Common Configuration Workflow

1. Access the official ThingSys configuration method for the TS-V6W (SMS commands or vendor software) and confirm the device password and supported firmware features.
2. Set the APN, APN username, and APN password for the installed SIM so the tracker can start a GPRS session.
3. Enter the Plaspy server by using either the domain d.plaspy.com or the server IP 54.85.159.138 as the tracker server address.
4. Set the server port to 8888; remember Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP transport on devices that require a transport selection, or use the default transport in device firmware.
6. Apply or save the configuration and restart the tracker if the device requires a reboot for network settings to apply.
7. Validate the device reports to Plaspy by confirming the tracker appears in the platform and sends position or heartbeat messages.

## Example Configuration Commands

The TS-V6W supports SMS configuration. The following public SMS commands are provided as documented sample commands. These commands are sent to the device SMS number and use the device password where required. The example uses the default device password 123456 shown in the public configuration example.

- Factory reset (optional initial step)
```text
FORMAT
```

- Set the operator APN (replace [apn] with your operator APN)
```text
apn123456 [apn]
```

- Set the APN username (replace [apnu] with the APN username if required)
```text
apnuser123456 [apnu]
```

- Set the APN password (replace [apnp] with the APN password if required)
```text
apnpasswd123456 [apnp]
```

- Set the GPRS server to the Plaspy endpoint (this example uses the server IP and port)
```text
ip54.85.159.138 8888
```

- Check current settings
```text
CXZT
```

Notes on placeholders and commands:
- [apn] is the mobile operator APN string required for internet access.
- [apnu] is the APN username if the SIM requires one; leave blank if not needed.
- [apnp] is the APN password if the SIM requires one; leave blank if not needed.
- The command ip54.85.159.138 8888 sets the device to use the Plaspy server IP and port as provided in the public configuration. Some installers prefer to use the server domain d.plaspy.com where supported by the device firmware; follow ThingSys documentation for domain support.

## Configuration Notes

- Firmware variations may change exact SMS syntax or required authentication. Confirm the command format against the TS-V6W firmware revision.
- The device supports SMS-based setup as shown; vendor tools or serial configuration methods may also be available and can provide bulk provisioning options.
- When the firmware requires a transport selection, choose UDP or TCP consistently with your network and firewall rules; Plaspy accepts both and will auto detect the protocol.
- Plaspy uses the same port 8888 for all supported devices so there is no per-device port mapping required on the platform side.
- If you perform a factory reset with FORMAT, treat that as an optional initial step if you need to clear previous settings before provisioning.

## Why Use Plaspy with This Configuration

Using the ThingSys TS-V6W with Plaspy gives fleet managers and security teams a straightforward path to collect continuous location, alarm, and basic telemetry data in a single platform. With shared Plaspy server settings and automatic protocol detection, you can standardize provisioning across fleets and reduce per-device configuration complexity.

Learn more about Plaspy and how it integrates with compatible trackers on the Plaspy website https://www.plaspy.com. For the most current device specific commands, firmware behavior, and installation details consult the official ThingSys documentation at https://www.thingsys.com/ to verify the latest setup information.
