---
slug: /castel/idd_213n/configuration
id: idd_213n-configuration
sidebar_label: Configuration
title: Castel - IDD-213N Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for configuring the Castel IDD-213N to communicate with Plaspy for tracking and diagnostics
keywords:
  - Castel IDD-213N configuration
  - Castel GPS tracker setup
  - IDD-213N Plaspy integration
  - Castel tracker server configuration
  - vehicle tracking setup
  - OBDII GPS tracker configuration
  - fleet tracker Plaspy settings
  - Castel IDD-213N SMS configuration
  - GPS platform setup
  - tracking device configuration
---

# Castel - IDD-213N Configuration

This page covers the public configuration context for using the Castel IDD-213N with Plaspy. It explains the shared server values and practical steps you can use to point the device at Plaspy for real time tracking and remote diagnostics. The instructions here summarize public setup information and example SMS commands where available.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The IDD-213N supports 3G and OBD II connectivity and often accepts configuration via SMS commands, but device behavior can differ by firmware version so review manufacturer guidance as needed.

## Configuration Overview

The goal of this configuration is to prepare the IDD-213N to report location and diagnostic data to the Plaspy platform reliably. Configuration ties the device to Plaspy's network endpoint, ensures mobile data access is available, and enables the device to send telemetry and alerts to the platform.

- Provide the device with a valid mobile data APN and server settings so it can establish GPRS/3G connections.
- Point the tracker at Plaspy using the shared server domain or IP and the required port so data reaches the backend.
- Validate connectivity and protocol behavior so Plaspy can automatically detect the device protocol and parse messages.
- Confirm the device reports and appears in Plaspy for live tracking and diagnostic visibility.
- Use manufacturer methods such as SMS commands or configuration software to apply settings as supported by the device.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- The IDD-213N must have a working 3G capable SIM with data enabled and correct APN values for the mobile operator.
- Access to the device configuration method supported by the unit, such as SMS command access or the vendor's configuration tool.
- Power and physical access to the device or OBDII port where it is connected so any required restarts can be performed.
- The device ID or serial number to derive the default SMS secret key when required.
- A phone capable of sending SMS for devices that accept configuration via text messages.
- Knowledge of whether the device is expected to use UDP or TCP transport if the device requires explicit transport selection.

## How This Tracker Connects to Plaspy

When configured, the IDD-213N sends its telemetry and diagnostic packets to the Plaspy backend endpoint so fleet managers can see live locations and vehicle diagnostics. Plaspy receives the incoming messages on the shared endpoint and automatically determines the correct protocol to interpret the data.

- The tracker is configured to report to the shared Plaspy server endpoint at d.plaspy.com or directly to 54.85.159.138.
- All devices send data to port 8888 on the Plaspy side, and Plaspy uses the same port for all supported trackers.
- The device may transmit using UDP or TCP depending on selection; Plaspy will auto detect the protocol.
- Once messages reach Plaspy, the platform processes location, event, and diagnostic records for visibility in the fleet dashboard.
- Regular validation of reporting confirms the device is reachable and correctly parsed by Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method for the IDD-213N; for many installations this is SMS based or via Castel configuration software.
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the IP 54.85.159.138.
3. Set the server port to 8888 in the device configuration.
4. Choose UDP or TCP if the device requires an explicit transport selection.
5. Apply or save the configuration on the device using SMS command confirmation or the vendor tool.
6. Restart the device if required by the manufacturer to activate new network settings.
7. Validate that the device reports to Plaspy and appears as active in the platform.

## Example Configuration Commands

The IDD-213N supports SMS based configuration. The following public SMS command templates are provided by Castel for setting GPRS/APN and server details and for verifying the settings.

Note: The default SMS secret key is the last 6 ASCII characters of the device ID. Replace [SecretKey] with that value. Replace [apn], [apnu], and [apnp] with your mobile operator APN, APN username, and APN password as required. The commands below include the Plaspy IP and port as provided.

- Set APN settings and server (example SMS template):

```
*[SecretKey]#set gprs#[apn],[apnu],[apnp],54.85.159.138,8888*
```

- Verify current GPRS settings (example SMS template):

```
*[SecretKey]#get gprs#*
```

If your installation uses domain names instead of direct IP addresses, you can substitute d.plaspy.com in the APN/server field where the device accepts a domain name. Always preserve the format required by the device when composing SMS commands.

## Configuration Notes

- The exact SMS syntax, delimiters, and required fields can vary by firmware revision; confirm the command format with the device documentation before sending configuration messages.
- When offered, choosing UDP vs TCP affects transport behavior; Plaspy supports both and will auto detect the protocol, but select the transport required by your network and device.
- Using the domain d.plaspy.com may be preferable in environments where the IP could change, but the provided IP 54.85.159.138 is the direct endpoint Plaspy receives data on.
- SMS based configuration is convenient for in-field setup, but manufacturer tools or wired configuration methods may be faster for bulk provisioning.
- If you must reset settings, follow manufacturer recommended procedures; include reset steps only when required for troubleshooting or re-provisioning.

## Why Use Plaspy with This Configuration

Configuring the Castel IDD-213N to report to Plaspy provides a practical way to combine vehicle diagnostic data and location tracking into a single fleet management view. Organizations that need visibility into vehicle health, driving behavior, and location can use Plaspy to monitor assets in real time and receive diagnostic information sent from the device.

To learn more about Plaspy and how it handles device telemetry and fleet insights, visit https://www.plaspy.com. Manufacturer configuration methods, firmware behavior, and device details can change over time, so verify the latest device specific setup information on the Castel website http://www.castelecom.com/.
