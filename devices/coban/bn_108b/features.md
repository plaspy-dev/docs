---
slug: /coban/bn_108b/features
id: bn_108b-features
sidebar_label: Features
title: Coban - BN-108B Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the Coban BN 108B GPS tracker and how it integrates with Plaspy for fleet and asset monitoring
keywords:
  - Coban BN 108B features
  - BN 108B GPS tracker
  - Coban GPS tracker
  - BN 108B Plaspy
  - magnetic GPS tracker
  - long battery GPS tracker
  - vehicle tracking BN 108B
  - portable asset tracker
  - BN 108B remote immobilization
  - BN 108B SOS alarm
---

# Coban - BN-108B Features

This page describes the public feature context for using the Coban BN-108B with Plaspy. It summarizes the device capabilities that are relevant to Plaspy users, explains how those capabilities map to monitoring and alerting workflows, and highlights practical operational value for fleet and asset management. The content here is intended for general guidance and SEO discovery rather than detailed installation or security procedures.

Exact feature availability and behavior can vary by firmware version, hardware revision, regional variant, and the details of each installation. For device-specific commands, wiring, or the latest firmware behavior consult the manufacturer documentation in addition to any platform integration notes from Plaspy.

## Feature Overview

The BN-108B is a portable 2G GPS tracker designed for long-life mobile asset management and anti-theft protection. It pairs a strong magnetic housing and a very large rechargeable battery with configurable reporting strategies and security-oriented alarms, making it suited to discreet installations where long standby and reliable position reporting matter.

- Very large rechargeable battery for extended standby and long-term tracking without permanent wiring
- Strong magnetic enclosure for quick and discreet attachment to vehicles and portable assets
- Multiple reporting modes including real-time, Smart mode with motion wake, and power saving with scheduled wake ups
- Security alarms such as external power disconnect, SOS, and remote immobilization for anti-theft workflows
- GSM GPRS connectivity with TCP UDP and SMS transport for straightforward integration into Plaspy
- Remote voice monitoring and Bluetooth automatic arming and disarming for local control and incident handling

## Core Features of Coban - BN-108B

- Long life 10,000 mAh rechargeable battery for extended tracking and standby
- Portable magnetic housing for temporary or covert installation on vehicles and equipment
- GPS positioning with standard GNSS performance for live and historical location reporting
- Multiple reporting strategies including real time, Smart motion wake, and power saving scheduled wake ups
- GSM GPRS connectivity using TCP UDP and SMS transports for server integration
- Security and alarm features including external power disconnect alarm and SOS alarm
- Remote immobilization capability to cut off oil or power as part of theft response
- Bluetooth automatic induction for arming and disarming and remote voice monitoring for listen in

## How These Features Work with Plaspy

When a BN-108B is deployed with Plaspy, the device becomes a telemetry source that feeds position, status, and event data into Plaspy for live tracking, alerting, and historical analysis. Plaspy automatically detects supported tracker protocols and ingests device reports to present them as map positions, events, and playback tracks.

- Real time location updates and periodic reports appear on Plaspy maps for live tracking and route visualization
- Alarms such as external power disconnect, SOS, movement or shock, overspeed, geo fence breaches, and low battery can be forwarded as immediate alerts in Plaspy
- Configurable reporting modes let operators balance update frequency and battery life, reflected in the cadence of incoming data in Plaspy
- Remote immobilization and SOS workflows can be integrated into Plaspy alert handling for rapid response and incident tracking
- Bluetooth arming state and remote voice monitoring events can be recorded in Plaspy as status changes or incident annotations

## Typical Use Cases

- Fleet and truck asset tracking where discreet attachment and long battery life reduce installation time and maintenance
- Anti theft monitoring with external power disconnect alerts, SOS handling, and remote immobilization as response options
- Rental car and shared mobility monitoring for security, incident investigation, and operational oversight
- Portable equipment protection for tools, generators, and other high value assets needing temporary tracking
- Long term covert or temporary monitoring where scheduled wake ups and power saving modes extend operational life

## Feature Availability Notes

- Feature presence and exact behavior depend on device firmware version and manufacturer implementation
- Hardware revisions and regional variants may change supported GSM bands or available alarms
- Installation type and wiring determine whether certain alarms or immobilization functions are usable
- Some functions are configurable by SMS or remote management and may require specific firmware settings
- Always verify which features are enabled on the unit you receive and test event reporting in Plaspy before operational use

## Why Use Plaspy with These Features

Using the BN-108B with Plaspy gives organizations a practical combination of long battery life, discreet installation, and security-focused alarms for fleet and asset monitoring. Plaspy translates the device telemetry and events into map positions, alerting rules, and historical playback so teams can maintain visibility and respond to incidents efficiently.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device features, firmware behavior, and manufacturer details at the official Coban site https://www.coban.net/ .
