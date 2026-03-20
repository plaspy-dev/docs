---
slug: /tzone/tz_avl301/configuration
id: tz_avl301-configuration
sidebar_label: Configuration
title: TZone - TZ-AVL301 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the TZone TZ-AVL301 for use with Plaspy using public server settings and example SMS commands
keywords:
  - TZone TZ-AVL301 configuration
  - TZ-AVL301 setup Plaspy
  - TZone GPS tracker configuration
  - TZ-AVL301 server configuration
  - TZ-AVL301 SMS commands
  - TZone tracker setup
  - TZ-AVL301 tracking software configuration
  - GPS tracker Plaspy integration
  - TZ-AVL301 GPRS setup
  - vehicle tracking TZ-AVL301
---

# TZone - TZ-AVL301 Configuration

This page documents the public configuration context for using the TZone TZ-AVL301 tracker with Plaspy. It collects the practical server settings and example SMS commands that are commonly used to point the device to Plaspy so the tracker can report location and status to the platform. Where manufacturer-specific commands are provided publicly, they are included below in their original order so you can apply them as a reference.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The TZ-AVL301 supports SMS configuration and GPRS reporting based on the public commands shown here; always check the device firmware and vendor instructions for the definitive method for your units.

## Configuration Overview

The configuration process prepares the TZ-AVL301 to communicate with Plaspy and ensures the device is visible and reporting correctly in the platform. For this model, configuration commonly includes setting the mobile operator APN, configuring the GPRS server endpoint and port, enabling GPRS reporting, and selecting the desired update interval.

- Set the SIM operator APN and optional username or password so the tracker can open a data connection.
- Configure the device to report to Plaspy by entering the shared Plaspy server details.
- Enable GPRS mode and set an appropriate update interval to control reporting frequency.
- Validate connectivity by confirming the device registers with Plaspy and appears in your account.
- Use SMS commands or the manufacturer tool depending on the unit firmware and installer preference.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

These values are the public endpoint details Plaspy uses for devices. Plaspy uses the same port for all supported devices and will automatically detect the protocol the tracker uses when it connects.

## Typical Requirements Before Setup

- A powered TZ-AVL301 with a charged battery or wired supply.
- An active SIM card with data (GPRS) and SMS capability inserted in the tracker.
- The mobile operator APN, and optionally APN username and password.
- Access to the device phone number to send SMS configuration commands.
- Access to the official TZone configuration instructions or installer tool for reference.
- A Plaspy account to verify the device appears after configuration.

## How This Tracker Connects to Plaspy

The TZ-AVL301 is configured to send location and status updates to the shared Plaspy server endpoint and port so Plaspy can display telemetry and events in the platform. Plaspy’s automatic protocol detection handles many tracker protocols, allowing the device to use either UDP or TCP on the assigned port.

- The device opens a GPRS data connection using the configured APN.
- It sends position and status packets to the Plaspy endpoint at d.plaspy.com or 54.85.159.138 on port 8888.
- The tracker may use UDP or TCP depending on its configuration and firmware.
- Plaspy detects the incoming protocol and parses the data so the unit appears in your account.
- Once reporting is active, the platform provides location visibility and event reporting for operational monitoring.

## Common Configuration Workflow

1. Access the official TZone configuration method for your TZ-AVL301 unit (SMS commands, dealer tool, or installer software) as provided by the manufacturer.
2. Enter the Plaspy server address as either d.plaspy.com or 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as the device port.
4. Choose the transport method (UDP or TCP) if the device requires you to select one.
5. Set the operator APN and any APN credentials required for data connectivity.
6. Apply or save the configuration and enable GPRS reporting or data mode on the device.
7. Restart or power cycle the tracker if the device requires a reboot for changes to take effect.
8. Validate that the device reports to Plaspy by checking your Plaspy account for the tracker and verifying recent position updates.

If you use SMS configuration, follow the manufacturer-provided SMS command syntax; an example set is shown below.

## Example Configuration Commands

To set the tracker using SMS, send the following commands to the device phone number in the order shown. These commands are taken from public TZone configuration examples.

1. Set the operator APN. The command includes optional APN username and password placeholders:
```text
*000000,011,[apn]{{,[apnu],[apnp]}}#
```
- Explanation: Replace [apn] with your operator APN. If your APN requires a username and password, include [apnu] and [apnp] respectively. The example syntax in some firmware variants uses comma separated fields after the APN.

2. Set the update interval to 60 seconds:
```text
*000000,018,60,999#
```
- Explanation: This sets reporting interval and related parameters as shown. Confirm the meaning of each field with the device manual if you need a different interval.

3. Set the GPRS server to the Plaspy public IP and port:
```text
*000000,015,0,54.85.159.138,8888#
```
- Explanation: This explicit command uses the Plaspy server IP and port. If your device firmware supports a domain name instead of IP, you can configure d.plaspy.com in place of the IP according to the device manual.

4. Activate GPRS data reporting mode:
```text
*000000,016,1#
```
- Explanation: Enables GPRS mode so the device will use the configured APN and server settings to send data.

Notes on the commands above:
- The prefix "000000" in these examples is used as the administrative password token in the SMS command format shown. Use the correct password or token for your specific device if it differs from this example.
- Preserve placeholders such as [apn], [apnu], and [apnp] when preparing SMS text and replace them with your actual provider details.
- Commands must be sent in the order required by your installer guidance; the order shown here matches the public example sequence.

## Configuration Notes

- Firmware and hardware revisions can change the exact SMS syntax and available parameters; always confirm command formats with the device manual.
- Some firmware versions accept a domain name (d.plaspy.com) while others may require the numeric IP; use the method your device supports.
- SMS based configuration is convenient for remote units, but ensure SMS delivery and SIM data connectivity are working before relying on GPRS reporting.
- Choosing UDP or TCP affects how the device opens sessions to Plaspy; select the transport supported and recommended for your firmware and network environment.
- After applying settings, allow time for the GPRS connection to establish and verify reporting in Plaspy.

## Why Use Plaspy with This Configuration

Using the TZ-AVL301 with Plaspy gives organizations a straightforward path to visibility and operational oversight by directing device telemetry to a single shared endpoint. With the public server settings and example SMS commands above, installers can prepare devices to report to Plaspy so fleet managers can monitor position, status, and events from a central platform.

Learn more about Plaspy and view platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time, so verify the latest setup information and command syntax with the manufacturer at http://www.tzonedigital.com/.
