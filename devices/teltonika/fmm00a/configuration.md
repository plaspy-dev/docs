---
slug: /teltonika/fmm00a/configuration
id: fmm00a-configuration
sidebar_label: Configuration
title: Teltonika - FMM00A Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Teltonika FMM00A to report to Plaspy with server settings APN placeholders and example commands
keywords:
  - Teltonika FMM00A configuration
  - FMM00A setup Plaspy
  - Teltonika tracker configuration
  - FMM00A server settings
  - Plaspy tracker setup
  - Teltonika OBD II configuration
  - GPS tracker configuration guide
  - vehicle tracking setup Plaspy
  - Teltonika FMM00A commands
  - fleet tracking configuration
---

# Teltonika - FMM00A Configuration

This page provides public configuration context for using the Teltonika FMM00A with Plaspy. It collects the Plaspy server details you will need, explains typical prerequisites, and shows the common commands used to point an FMM00A tracker at the Plaspy endpoint. Use this as a practical reference for integrating the FMM00A into a Plaspy deployment.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary depending on firmware version, hardware revision, installation type, and the Teltonika configuration tools you use. The examples below show how to set APN and server parameters using the public setparam style command that Teltonika devices accept in their configuration interfaces.

## Configuration Overview

Configuring the FMM00A for Plaspy prepares the device to send location and OBD telemetry to the Plaspy platform and ensures the tracker is reachable and visible in your Plaspy account. The objective is to set network APN details, point the device at the Plaspy endpoint, and verify transport and reporting behavior.

- Set the device APN credentials so the device can obtain a cellular data connection.
- Configure the server endpoint to d.plaspy.com or the Plaspy server IP so telemetry is routed correctly.
- Set the port to 8888 which Plaspy uses for all devices to simplify provisioning.
- Choose UDP or TCP transport where required by the device configuration interface.
- Apply the settings and confirm the device appears and reports correctly in Plaspy.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Note that Plaspy uses the same port for all supported devices and automatically detects the correct tracker protocol once the device is sending data to d.plaspy.com on port 8888.

## Typical Requirements Before Setup

- A powered and installed FMM00A in the vehicle OBD II port or appropriate mounting location.
- An active SIM card with a data plan and the correct APN values for your mobile operator.
- Access to Teltonika configuration methods or tools such as Teltonika remote management or local configuration utilities described by the manufacturer.
- The APN placeholders or values you will use such as [apn] [apnu] and [apnp] to populate the device APN fields.
- Basic access to Plaspy so you can validate the device appears and telemetry is received after configuration.

## How This Tracker Connects to Plaspy

The FMM00A transmits GNSS and OBD telemetry over the cellular network to the Plaspy shared server endpoint and port. Plaspy receives the device payloads, normalizes the telemetry, and provides real time tracking, events and historical reports in the platform.

- The device is configured to report to the Plaspy server endpoint d.plaspy.com or the IP address 54.85.159.138.
- All devices report to port 8888 which unifies provisioning and routing on Plaspy.
- Plaspy automatically detects the tracker protocol so minimal per device protocol selection is required on the platform side.
- The tracker sends periodic position and OBD telemetry packets which Plaspy ingests and displays for monitoring and reporting.
- Transport is set on the device side as UDP or TCP depending on your provisioning preference and device tooling.

## Common Configuration Workflow

1. Access the official Teltonika configuration method or software appropriate for your deployment such as Teltonika remote tools or local configuration interfaces.
2. Enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the server port to 8888 which Plaspy uses for all supported devices.
4. Choose UDP or TCP if the device requires a transport selection during setup.
5. Provide the operator APN values using the APN placeholders such as [apn] [apnu] and [apnp] when prompted.
6. Apply or save the configuration and restart the device if your tool or firmware requires a reboot for changes to take effect.
7. Validate that the device reports to Plaspy by checking device activity and telemetry in your Plaspy account.

## Example Configuration Commands

To configure the basic parameters on your Teltonika device, the following public style command can be used in Teltonika supported configuration interfaces. The placeholders should be replaced with your actual APN values where required.

- set APN and Plaspy server parameters using the Teltonika setparam style command

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Explanation of placeholders and fields in the command above
- [apn] is your cellular data APN
- [apnu] is the APN username if required by the operator
- [apnp] is the APN password if required
- d.plaspy.com is the Plaspy server domain used to receive telemetry
- 8888 is the Plaspy port used by all devices
- 2006 is the transport selection parameter in this command string use the manufacturer documentation to confirm numeric values for UDP or TCP if needed

If your provisioning method requires using the server IP instead of domain, replace d.plaspy.com with 54.85.159.138 in the same command sequence according to your configuration tool.

## Configuration Notes

- Firmware versions and Teltonika provisioning tools can change parameter names and numeric codes so always confirm the meaning of numbered parameters with the current Teltonika documentation.
- Use UDP or TCP based on your network and provisioning practices. Plaspy accepts both and performs automatic protocol detection on incoming connections.
- Preserve APN placeholders during mass provisioning and replace them with operator specific values when provisioning individual SIMs or operator profiles.
- Some Teltonika tools offer FOTA WEB or remote management which can be used for bulk updates and mass provisioning of server and APN settings.
- If you must use the server IP instead of the domain for any reason, use 54.85.159.138 with port 8888.

## Why Use Plaspy with This Configuration

Using the Teltonika FMM00A with Plaspy gives fleet operators a fast to deploy OBD II solution that streams GNSS and vehicle telemetry into a single platform for live tracking, diagnostics and reporting. The shared Plaspy server configuration simplifies large scale rollouts because every device points to the same port and Plaspy automatically detects the protocol as devices begin sending data.

To learn more about Plaspy and how it handles device ingestion and fleet telemetry visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes and parameter definitions verify details on the manufacturer website https://www.teltonika-gps.com/ since Teltonika configuration methods and numeric parameter codes can change over time.
