---
slug: /coban/bn_501/protocol
id: bn_501-protocol
sidebar_label: Protocol
title: Coban - BN-501 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Coban BN-501 and how it communicates with Plaspy for wearable GPS tracking
keywords:
  - Coban BN-501
  - Coban BN-501 protocol
  - Coban GPS tracker
  - BN-501 Plaspy compatibility
  - wearable GPS protocol
  - personal tracker communication
  - GPS tracker Plaspy integration
  - BN-501 tracking protocol
  - Coban wearable tracker
  - device telemetry and alarms
---

# Coban - BN-501 Protocol

This page describes the public protocol context for using the Coban BN-501 tracker with Plaspy. It focuses on how the device communicates with Plaspy using the shared connection settings and what aspects of the tracker reporting behavior are relevant for integration and troubleshooting. The content is intentionally high level to avoid exposing implementation specifics while helping technical users understand the communication flow.

The BN-501 is a compact wearable tracker with GPS, WiFi assisted positioning, BLE 5.0, and multi network cellular options. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. For firmware specific details please refer to the manufacturer documentation.

## Protocol Overview

The BN-501 reporting protocol provides the means for the device to deliver location, telemetry, and event data to Plaspy so the platform can present real time tracking and alarms. The protocol governs how the tracker identifies itself, reports position and status, and transmits alarm events such as SOS, movement, and low battery.

- Enables delivery of GPS and WiFi assisted location fixes and BLE proximity indicators to Plaspy for mapping and event processing.
- Transports alarm signals including SOS help, shock, movement, and geo fence alerts that appear as events in Plaspy.
- Carries device telemetry such as battery level and connectivity state so Plaspy can trigger notifications and maintenance workflows.
- Supports configuration pathways like Bluetooth and SMS for device setup while using TCP or UDP reporting for live data.
- Helps Plaspy correlate device identity with incoming data so location and events are attributed to the correct asset or person.

## How Plaspy Detects the Protocol

Plaspy receives reports from many tracker models on a shared endpoint and port and uses that unified connection context to determine the incoming tracker protocol. In most cases a BN-501 configured to report to the Plaspy endpoint will be recognized automatically and begin delivering usable position and event data without additional protocol selection in the Plaspy interface.

- Plaspy listens on a single device port and automatically detects the tracker protocol when data arrives.
- Users typically do not need to manually select a protocol inside Plaspy if the device is correctly pointed to the Plaspy endpoint.
- Plaspy supports the BN-501 reporting modes and will ingest GPS, WiFi assisted, and BLE derived information provided by the device.
- Automatic detection helps simplify deployments that mix multiple device models and manufacturers on the same account.
- If a device is not appearing, common checks include server address configuration on the device, transport selection, and firmware version.

## Transport and Connection Context

The BN-501 can report position and alerts to Plaspy over IP data transport or by alternative methods depending on configuration. For IP reporting Plaspy provides a single public endpoint and port where devices should send their data. Devices may be configured to use UDP or TCP on port 8888 depending on device support and the preferred transport mode.

- Plaspy server domain for device reporting is d.plaspy.com for DNS based configuration.
- Plaspy server IP is 54.85.159.138 and the shared port for device reporting is 8888.
- The BN-501 may be configured to use UDP or TCP on port 8888 to reach Plaspy.
- All devices in Plaspy use the same port, which simplifies device network configuration across mixed fleets.
- Some BN-501 deployments may also use SMS for fallback or specific workflows; TCP and UDP are the standard IP transports for real time reporting.

## Protocol Compatibility Notes

- Firmware revisions can change message timing, available fields, and reporting behavior. Verify the BN-501 firmware level when diagnosing differences.
- Hardware revisions or regional variants may alter supported cellular bands or low power network behavior and affect which transport is most reliable.
- The device supports BLE configuration and SMS commands which can be useful when network transport needs adjustment before pointing to Plaspy.
- Transport selection between TCP and UDP can affect delivery characteristics especially on networks with high packet loss or NAT behavior.
- Always validate compatibility and recommended settings against the official Coban documentation for your specific BN-501 unit.
- Plaspy compatibility is provided based on observed device behavior and standard reporting modes; confirm production firmware behavior before large scale rollouts.

## Why Protocol Understanding Matters

Understanding how the BN-501 communicates with Plaspy helps ensure successful deployment, reliable alerting, and efficient troubleshooting when devices are in the field. Knowing the basic reporting pathways and common variability enables faster resolution of connectivity and data interpretation issues.

- Speeds up initial setup by confirming correct server address and transport mode for the device.
- Helps identify whether missing data is due to network transport selection, device configuration, or firmware differences.
- Improves alarm and event tuning because you can align device reporting intervals and power modes with Plaspy processing expectations.
- Enables sensible troubleshooting steps such as checking BLE configuration, SMS fallback settings, and cellular network coverage.
- Supports long term reliability planning by highlighting how power profiles and reporting strategies affect battery life and data timeliness.

## Why Use Plaspy with This Protocol

The BN-501 provides a discreet, wearable option for organizations that need personal protection, pet monitoring, or concealed asset tracking while maintaining real time visibility and alerting. Using the BN-501 with Plaspy gives teams centralized access to location, alarms, and telemetry so they can act quickly on SOS events, movement alerts, or geo fence breaches.

To learn more about Plaspy and how the platform handles device reporting and fleet visibility visit https://www.plaspy.com. For the most current device specific protocol notes, firmware information, and installation guidance consult the official manufacturer resources at https://www.coban.net/ which will have the latest technical and firmware updates.
