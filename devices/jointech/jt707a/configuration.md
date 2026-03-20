---
slug: /jointech/jt707a/configuration
id: jt707a-configuration
sidebar_label: Configuration
title: Jointech - JT707A Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for Jointech JT707A configuration with Plaspy server settings SMS commands and validation steps
keywords:
  - Jointech JT707A configuration
  - JT707A setup for Plaspy
  - Jointech JT707A server configuration
  - JT707A GPS tracker configuration
  - Plaspy compatible devices
  - JT707A SMS configuration
  - GPS seal tracker setup
  - fleet tracking JT707A
  - JT707A APN setup
  - tracking platform configuration
---

# Jointech - JT707A Configuration

This page provides a public configuration overview for using the Jointech JT707A with the Plaspy tracking platform. It consolidates the essential, publicly available setup context including server settings, SMS-based configuration commands provided in manufacturer documentation, and the verification workflow you will use to confirm connectivity with Plaspy.

Plaspy uses shared server settings across all supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps can vary by firmware, hardware revision, installation type, and vendor tools. The JT707A can be configured using manufacturer SMS commands as shown below, so review this guidance and the official Jointech documentation when applying settings.

## Configuration Overview

The configuration process prepares the JT707A to deliver GNSS location and seal-status telemetry to Plaspy. The primary goal is to point the device at Plaspy’s shared server endpoint and verify that reports arrive in the platform.

- Configure the tracker to send GPRS data to Plaspy using the shared server endpoint and port.
- Provide the device APN and, if required, APN user and password via SMS commands or the manufacturer tool.
- Choose UDP or TCP transport on the device if required; Plaspy accepts both on the same port.
- Save and apply settings, then verify the tracker appears in Plaspy and sends location and seal events.
- Validate tamper/unseal alerts and reporting intervals to match deployment battery and audit requirements.

## Plaspy Server Settings

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- A powered JT707A device with a known device ID for SMS or configuration tool access.  
- An active SIM with data enabled and a correct APN for the SIM operator. SMS capability is needed for SMS-based configuration.  
- Access to the manufacturer's SMS command list or configuration tool for the JT707A.  
- A phone or console able to send SMS commands to the device or access to the vendor software used for provisioning.  
- Basic knowledge of the device ID placeholder used in commands and the APN credentials for your network.

## How This Tracker Connects to Plaspy

The JT707A is configured to send GNSS fixes and seal status updates to the Plaspy server endpoint and port so the platform can record location, event logs, and alerts.

- The device reports to the shared Plaspy server endpoint at d.plaspy.com or 54.85.159.138 on port 8888.  
- Transport can be UDP or TCP depending on device configuration; Plaspy accepts both on the same port.  
- Plaspy automatically detects the tracker protocol so the same server and port are used for multiple tracker models.  
- Location updates and seal/tamper events are mapped into Plaspy dashboards for monitoring and alerting.  
- Successful connectivity provides continuous visibility and an auditable event history within Plaspy.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the JT707A (SMS commands or vendor provisioning tool).  
2. Enter the Plaspy server address either as domain d.plaspy.com or as IP 54.85.159.138 depending on device input options.  
3. Set the server port to 8888. Remember all devices in Plaspy use the same port.  
4. Choose UDP or TCP transport on the device if the device requires you to select a transport protocol.  
5. Provide APN details and any APN user or password required by your SIM using the manufacturer commands.  
6. Apply or save the configuration and restart the tracker if the device requires a reboot to apply network settings.  
7. Validate that the device reports to Plaspy and that location and seal events appear in the platform.

## Example Configuration Commands

The JT707A manufacturer documentation provides SMS commands to set the GPRS server and APN. Replace the placeholders before sending. Send these as SMS messages to the device using its configured phone number.

1. Set the GPRS server and APN (replace {{trackerID}} and [apn]):
```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,[apn])
```
- Explanation: {{trackerID}} is the device identifier required by the JT707A SMS command format. [apn] is the Access Point Name for the SIM operator.

2. (Optional) Set the APN user and password if your operator requires credentials (replace {{trackerID}}, [apnu], and [apnp]):
```
({{trackerID}},2,S24,129,1,[apnu],[apnp])
```
- Explanation: [apnu] is the APN username and [apnp] is the APN password. Omit this command if the APN does not require a username or password.

Note: The order above is important for typical setups—set the server and APN first, then provide APN credentials if needed. Manufacturer tools may offer equivalent fields in a GUI instead of SMS.

## Configuration Notes

- Firmware and hardware revisions can change available SMS commands or parameter formats. Always confirm commands against the device documentation for your specific firmware.  
- SMS based configuration is public and commonly used for JT707A provisioning; a vendor provisioning tool may provide the same settings in a GUI.  
- Choose UDP or TCP based on your local network reliability and device guidance; Plaspy accepts either on port 8888.  
- Preserve placeholders when preparing commands and replace them with device specific values such as the tracker ID and operator APN credentials.  
- After applying network settings, allow time for the device to register on the mobile network and for the first packets to arrive in Plaspy.

## Why Use Plaspy with This Configuration

Using the JT707A with Plaspy provides centralized visibility into both location and seal integrity for cargo and assets, enabling operations teams to detect tampering and track movements in real time. Pointing the JT707A at Plaspy’s shared server endpoint simplifies provisioning across a mixed fleet because Plaspy uses the same port for all supported devices and automatically detects the tracker protocol.

Learn more about Plaspy and how it can integrate with the JT707A on the main website https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and command syntax always verify details on the manufacturer website https://www.jointcontrols.com/
