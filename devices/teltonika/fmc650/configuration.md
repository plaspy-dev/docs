---
slug: /teltonika/fmc650/configuration
id: fmc650-configuration
sidebar_label: Configuration
title: Teltonika - FMC650 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Teltonika FMC650 integration with Plaspy including server settings and example configuration commands
keywords:
  - Teltonika FMC650 configuration
  - Teltonika FMC650 setup
  - Teltonika FMC650 Plaspy
  - FMC650 server configuration
  - FMC650 GPS tracker configuration
  - fleet tracking FMC650
  - FMC650 telematics setup
  - FMC650 APN settings
  - Teltonika tracker configuration
  - Plaspy device setup
---

# Teltonika - FMC650 Configuration

This page documents the public configuration context for using the Teltonika FMC650 with the Plaspy platform. It focuses on the shared Plaspy server settings, the typical steps to prepare an FMC650 for platform connectivity, and an example SMS batch command that is commonly used to apply basic network and server parameters. Use this guidance alongside official Teltonika documentation and your carrier APN details.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol. Manufacturer configuration tools, firmware versions, hardware revisions, installation type, and vendor provisioning workflows can change how you apply these settings on the FMC650, so follow the device vendor instructions for the exact configuration method you plan to use.

## Configuration Overview

Configuring an FMC650 for Plaspy prepares the device to send GNSS fixes and vehicle telemetry to a known Plaspy endpoint so the unit becomes visible and reportable in the Plaspy dashboard. The practical goal is to set the cellular APN, point the tracker at the Plaspy server, choose the transport mode if required, and verify the device successfully reports to the platform.

- Set the device APN and any required SIM credentials so the tracker has Internet access.
- Configure the tracker to report to the Plaspy server domain or IP on the shared port used by Plaspy.
- Select UDP or TCP transport if the FMC650 requires a transport choice during setup.
- Apply/save the configuration and restart the device if the vendor procedure requires it.
- Validate device visibility in Plaspy by confirming the tracker sends regular position and telemetry updates.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; configure the transport type if the device requires explicit selection
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered FMC650 with the appropriate regional variant and installed external antennas if required by your installation.
- An active SIM card with a valid APN and any necessary username or password credentials from your mobile operator.
- Access to the Teltonika configuration method you will use such as SMS commands, Teltonika configuration software, or web/console tools depending on the device firmware.
- Device IMEI and SIM phone number for SMS provisioning or device management access.
- Knowledge of the installation environment and any in-vehicle wiring considerations for power and CAN/serial connections.
- Access to Plaspy device provisioning or account where the tracker will be registered and validated.

## How This Tracker Connects to Plaspy

The FMC650 sends GNSS position and vehicle telemetry over its cellular connection to the Plaspy backend using the shared Plaspy server endpoint and port. Once configured, Plaspy ingests these messages and exposes them in maps, timelines, and telematics dashboards so fleet managers can monitor vehicles and respond to events.

- The tracker is pointed at d.plaspy.com (or the Plaspy server IP) and port 8888 for all device traffic.
- The device transmits location fixes and telemetry over the selected transport (UDP or TCP).
- Plaspy automatically detects the tracker protocol so no manual protocol selection is required in the platform.
- Data sent by the FMC650 becomes visible in Plaspy for real time tracking, diagnostics, and event reporting.
- Regular heartbeat and position messages allow Plaspy to monitor device availability and connectivity status.

## Common Configuration Workflow

1. Access the official Teltonika FMC650 configuration method you intend to use (SMS provisioning, Teltonika configurator, or vendor tool) according to the device firmware.
2. Enter the Plaspy server address using either d.plaspy.com or the Plaspy server IP 54.85.159.138 as required by the configuration method.
3. Set the server port to 8888 (Plaspy uses the same port for all devices).
4. Choose UDP or TCP transport if the device configuration requires an explicit transport selection.
5. Enter the carrier APN and any APN username or password placeholders your SIM requires.
6. Apply or save the configuration and restart the tracker if the vendor instructions indicate a restart is required.
7. Validate that the FMC650 reports to Plaspy by checking device online status and recent position updates in the Plaspy platform.

## Example Configuration Commands

The FMC650 can be configured using SMS batch commands in many deployment workflows. The following public SMS batch command sets APN placeholders and points the device at the Plaspy server and port. Preserve the placeholders when preparing the SMS and replace them with your carrier values.

- Example SMS batch command to set APN and Plaspy server parameters

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notes on the command above:
- Replace [apn] with your mobile operator APN.
- Replace [apnu] with the APN username if your operator requires one; leave empty if none.
- Replace [apnp] with the APN password if your operator requires one; leave empty if none.
- The command includes d.plaspy.com and port 8888 so the tracker will target the Plaspy server endpoint.
- The final parameter 2006:1 is part of the parameter batch; consult Teltonika parameter documentation for the exact meaning of numeric parameter codes before changing other codes.

If you prefer to use the server IP instead of the domain in vendor tools, enter 54.85.159.138 and port 8888 in the same way your vendor configuration utility requires.

## Configuration Notes

- Firmware and firmware version can change parameter names and provisioning workflows; always verify parameter codes against the Teltonika FMC650 documentation for your firmware revision.
- TCP versus UDP choice is vendor and network dependent; choose the transport that matches your carrier behavior and installation constraints.
- SMS provisioning is a common public method but vendor software tools (or fleet provisioning systems) may offer more comprehensive configuration and validation options.
- Regional FMC650 variants may differ in cellular band support; confirm you have the correct variant for your market before deployment.
- Plaspy automatically detects tracker protocols and uses a single shared port, so focus on correct server address and APN rather than altering protocol values in the platform.

## Why Use Plaspy with This Configuration

Using the FMC650 with Plaspy gives fleet operators access to real time location, vehicle telemetry, and diagnostic data in a single platform. The FMC650’s professional telematics interfaces and rugged design make it suitable for heavy fleet, trailer, and specialized machinery use, while the Plaspy backend aggregates and displays telemetry for operational decision making.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device specific configuration parameters, firmware notes, and parameter code definitions for the FMC650, verify current details on the manufacturer's official site https://www.teltonika-gps.com/
