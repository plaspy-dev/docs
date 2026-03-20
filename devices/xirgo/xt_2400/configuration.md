---
slug: /xirgo/xt_2400/configuration
id: xt_2400-configuration
sidebar_label: Configuration
title: Xirgo - XT-2400 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Xirgo XT-2400 to connect to Plaspy with server settings and example SMS commands
keywords:
  - Xirgo XT-2400 configuration
  - Xirgo XT-2400 setup
  - Xirgo tracker configuration
  - XT-2400 Plaspy setup
  - GPS tracker server configuration
  - OBDII tracker setup
  - vehicle tracking configuration
  - fleet tracking XT-2400
  - GPS platform integration
  - Plaspy tracker settings
---

# Xirgo - XT-2400 Configuration

This page documents the public configuration context for using the Xirgo XT-2400 with Plaspy. It focuses on the practical server settings, required preparations, and example commands that are publicly available to point the tracker at Plaspy for telemetry and location reporting.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side steps can vary by firmware, hardware revision, installation type, and vendor tools, so treat the examples here as practical guidance and check manufacturer resources when needed.

## Configuration Overview

The goal of this configuration process is to prepare the XT-2400 so it can communicate reliably with Plaspy and be visible in your monitoring platform. The example commands below reflect publicly documented SMS configuration patterns used to set APN and the GPRS server endpoint.

- Configure the device to use the correct mobile data APN and credentials so it can access the cellular network.
- Set the device server endpoint so the tracker reports to Plaspy at the shared server and port.
- Select the transport option if the device requires UDP or TCP to be chosen explicitly.
- Apply and save the configuration, then restart the device if required to activate changes.
- Validate that the device appears in Plaspy and that location and status updates are received.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol when the device connects

These values are the public Plaspy endpoint details to use when configuring the XT-2400.

## Typical Requirements Before Setup

- A powered XT-2400 device installed or connected to vehicle OBD II power where applicable.
- An active cellular SIM with a compatible data plan and correct APN for the operator.
- Ability to send SMS configuration commands or access the official Xirgo configuration tool depending on your chosen method.
- Access to the XT-2400 SMS command reference or manufacturer configuration guide to confirm command syntax.
- Administrative access to Plaspy so you can verify the tracker shows as active after configuration.

## How This Tracker Connects to Plaspy

The XT-2400 is configured to report location and device data to the shared Plaspy server endpoint and port. Once APN and server settings are applied, the device will establish a GPRS data session and send telemetry to Plaspy where the platform will identify the device protocol automatically.

- The tracker uses the cellular data connection to send location and status updates to d.plaspy.com or 54.85.159.138.
- Data is sent on port 8888 using the transport mode you select on the device, UDP or TCP.
- Plaspy receives the inbound connection and automatically detects the tracker protocol for parsing.
- Telemetry becomes visible in Plaspy for monitoring, reporting, and operational workflows.
- Validation of connectivity is performed by confirming the device registers and reports within Plaspy.

## Common Configuration Workflow

1. Identify and open the official Xirgo configuration method for the XT-2400 such as SMS commands or vendor software.  
2. Enter the Plaspy server using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by the device interface.  
3. Set the server port to 8888.  
4. Choose UDP or TCP transport if the device requires an explicit transport selection.  
5. Configure the device APN and any required APN username or password so the tracker can establish GPRS data.  
6. Apply or save the configuration and restart the device if required to activate the new settings.  
7. Validate that the device reports to Plaspy and appears as active in your Plaspy account.

If your dealer or installer uses a different vendor tool, follow their documented flow but ensure the server and port listed above are applied.

## Example Configuration Commands

The XT-2400 supports SMS based configuration. The following public SMS commands are an example sequence to set the operator APN and the GPRS server for Plaspy. Send each line as a separate SMS from an authorized phone number or according to the device SMS configuration procedure.

1. Set the operator APN. Replace the placeholders with your operator values:
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
- {{apn}} is the APN name provided by the mobile operator.
- {{apnu}} is the APN username if required, or leave blank if not required.
- {{apnp}} is the APN password if required, or leave blank if not required.

2. Set the GPRS server to Plaspy. This sets port 8888 and the Plaspy server IP:
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- The command includes the required port 8888 and the Plaspy server IP 54.85.159.138.
- Send commands in the order shown when order matters for your workflow.

If you prefer vendor software or a provisioning tool, use equivalent fields to enter the domain or IP, port 8888, and APN values above.

## Configuration Notes

- Firmware and regional variants can change command syntax or the available configuration methods. Confirm commands against the device firmware revision.
- The XT-2400 supports SMS based setup as shown, but many installers use a vendor provisioning tool or configuration app instead of SMS.
- Choose UDP or TCP based on network characteristics or installer guidance; Plaspy will accept either and detect the protocol automatically.
- Plaspy uses the same port 8888 for all supported devices, so ensure consistency when provisioning multiple devices.
- Keep a record of any placeholders you replace such as {{apn}}, {{apnu}}, and {{apnp}} for future maintenance.

## Why Use Plaspy with This Configuration

Configuring the Xirgo XT-2400 to report to Plaspy provides a straightforward path to vehicle visibility, event monitoring, and operational oversight. Using the shared Plaspy endpoint simplifies provisioning across fleets because the same port and server settings apply to supported devices and Plaspy handles protocol detection.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer guidance verify current details at https://xirgo.com/.
