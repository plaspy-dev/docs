---
slug: /xirgo/xt45/configuration
id: xt45-configuration
sidebar_label: Configuration
title: Xirgo - XT45 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Xirgo XT45 tracker to send data to Plaspy with practical server and SMS command examples
keywords:
  - Xirgo XT45 configuration
  - XT45 Plaspy setup
  - Xirgo tracker configuration
  - XT45 server settings
  - Xirgo GPS tracker setup
  - XT45 tracking software configuration
  - Xirgo XT45 GPS platform setup
  - XT45 SMS configuration
  - Plaspy device configuration
  - XT45 fleet tracking setup
---

# Xirgo - XT45 Configuration

This page covers the public configuration context for using the Xirgo XT45 tracker with Plaspy. It describes the shared Plaspy server values you will point the device at, explains the typical setup workflow, and includes the manufacturer-provided SMS commands that are commonly used to place the XT45 onto the Plaspy service endpoint.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. This guide focuses on the practical, public steps to prepare the XT45 to communicate with Plaspy and highlights where you should consult Xirgo documentation for device-specific details.

## Configuration Overview

Configuring the XT45 for Plaspy prepares the device to send location and supervisory telemetry to a centralized platform so that operators can see live positions, receive alerts, and run reports. The process typically involves setting the APN and mobile data parameters, pointing the device at the Plaspy server endpoint, and validating that the device successfully reports into the platform.

- Set the operator APN so the device can establish cellular data connectivity.
- Configure the device GPRS server to the Plaspy endpoint and port so telemetry is directed to the platform.
- Choose the transport mode (UDP or TCP) if required and save the configuration on the device.
- Validate connectivity and device reporting in Plaspy to confirm telemetry is arriving.
- Use SMS or the manufacturer tool as applicable to apply settings when wiring or direct USB access is not available.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

These values are the public Plaspy endpoint settings you should use when configuring the XT45. Plaspy uses the same port for all supported devices and will detect the tracker protocol automatically.

## Typical Requirements Before Setup

- A powered and accessible XT45 unit with its cellular modem enabled.
- An active SIM card provisioned for data with a correct APN for the mobile operator.
- Access to the device configuration method supported by the unit such as SMS commands or the official Xirgo configuration tool.
- The Plaspy server settings (d.plaspy.com or 54.85.159.138 and port 8888) available to enter into the device.
- Ability to send SMS commands to the device if SMS-based configuration is used.
- A plan to validate reporting in Plaspy once configuration is applied.

## How This Tracker Connects to Plaspy

The XT45 is configured to report location fixes and supervisory telemetry to the shared Plaspy server endpoint and port. Once the correct APN and server settings are applied, the device uses its integrated cellular link to open a connection to Plaspy and send telemetry for live mapping, alerts, and historical reporting.

- The device sends GPS position and status messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be chosen as UDP or TCP; theXT45 may be set to use either transport as needed.
- Plaspy automatically detects the tracker protocol and ingests the incoming messages.
- Data arriving at Plaspy becomes visible on live maps and in reporting tools for monitoring and alerting.
- Supervisory inputs and outputs on the XT45 can be used to generate events that appear in Plaspy for workflows like immobilization or ignition monitoring.

## Common Configuration Workflow

1. Access the official Xirgo configuration method appropriate for your device and deployment such as SMS commands or the manufacturer software.
2. Set the device APN values for your mobile operator so cellular data can be used.
3. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server settings.
4. Set the server port to 8888 as Plaspy uses the same port for all devices.
5. If the device requires a transport selection, choose UDP or TCP and save the setting.
6. Apply or save the configuration on the device and, if required, restart the unit to activate the new settings.
7. Validate that the XT45 reports to Plaspy by checking device status and recent telemetry in the Plaspy platform.

## Example Configuration Commands

To set the tracker send the following commands by SMS messages in the order shown.

1. Set the operator APN (replace placeholders with your operator values):
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} = Access Point Name supplied by the mobile operator.
- {{apnu}} = APN username if required by the operator, otherwise leave blank or use the device-specific empty field convention.
- {{apnp}} = APN password if required by the operator, otherwise leave blank or use the device-specific empty field convention.

2. Set the GPRS server to point to Plaspy (port and IP are explicit):
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- This command configures the GPRS server to use port 8888 and IP 54.85.159.138 which correspond to the Plaspy endpoint. The remaining parameters are device-specific flags used by the XT45 firmware; consult Xirgo documentation for the meaning of those flags if you need to adjust them.

If your deployment uses the d.plaspy.com domain rather than the IP form, enter d.plaspy.com where the device configuration tool or SMS command accepts a hostname. Always preserve the command order when applying these settings and confirm with a restart if the device requires it.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax or parameter order; always verify the command format against your XT45 firmware release notes.
- The XT45 supports configuring server address by SMS as shown, but manufacturer tools or local configuration software may offer the same settings via USB or over-the-air provisioning.
- When choosing transport, consider network reliability and packet behavior for your operator; the device supports UDP or TCP on port 8888 and Plaspy will accept either.
- If APN credentials are not required, use the device convention for empty username and password fields (consult Xirgo docs).
- Restarting the device after applying settings is commonly required to ensure the new server and APN values take effect.

## Why Use Plaspy with This Configuration

Using the XT45 configured to report to Plaspy provides organizations with durable, reliable tracking for assets that experience intermittent power or harsh environmental conditions. The XT45’s supervisory inputs and rugged design combined with Plaspy’s centralized ingestion and automatic protocol detection help deliver actionable location and status telemetry for monitoring, alerts, and historical analysis.

To learn more about Plaspy and how it works with compatible trackers like the XT45 visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and manufacturer details consult the official Xirgo documentation at https://xirgo.com/ to verify commands and parameters for your exact hardware and firmware revision.
